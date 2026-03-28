import nodemailer from "nodemailer";

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

    const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT ?? 465);
    const smtpSecure = (process.env.SMTP_SECURE ?? "true") === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromAddress = process.env.SMTP_FROM ?? smtpUser;
    const toAddress = process.env.CONTACT_TO ?? "y.gordebil@gmail.com";

    if (!smtpUser || !smtpPass || !fromAddress) {
      return Response.json(
        { error: "Mail yapılandırması eksik. Lütfen SMTP ortam değişkenlerini ayarlayın." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
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
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Mesaj gönderilirken bir hata oluştu." }, { status: 500 });
  }
}
