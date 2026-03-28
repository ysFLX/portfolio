export const runtime = "nodejs";

type ContactPayload = {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const sanitize = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const fullName = sanitize(body.fullName ?? "");
    const email = sanitize(body.email ?? "");
    const subject = sanitize(body.subject ?? "");
    const message = (body.message ?? "").trim();

    if (!fullName || !email || !subject || !message) {
      return Response.json({ error: "Lütfen tüm alanları doldurun." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Geçerli bir e-posta adresi girin." }, { status: 400 });
    }

    if (message.length < 5) {
      return Response.json({ error: "Mesaj en az 5 karakter olmalı." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.RESEND_FROM ?? "ysflx <onboarding@resend.dev>";
    const toAddress = process.env.CONTACT_TO ?? "y.gordebil@gmail.com";

    if (!resendApiKey || !fromAddress) {
      return Response.json(
        { error: "Mail yapılandırması eksik. Lütfen RESEND ortam değişkenlerini ayarlayın." },
        { status: 500 }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        reply_to: email,
        subject: `[Portfolio İletişim] ${subject}`,
        text: `Ad Soyad: ${fullName}\nE-posta: ${email}\nKonu: ${subject}\n\nMesaj:\n${message}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6">
            <h2>Yeni İletişim Formu Mesajı</h2>
            <p><strong>Ad Soyad:</strong> ${fullName}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Konu:</strong> ${subject}</p>
            <p><strong>Mesaj:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return Response.json(
        {
          error:
            errorText ||
            "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.",
        },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Mesaj gönderilirken bir hata oluştu." }, { status: 500 });
  }
}
