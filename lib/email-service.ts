import nodemailer from "nodemailer";

interface SendPaymentEmailParams {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  orderId: string;
  paymentId: string;
  amount: number;
  packageName: string;
}

/**
 * Creates a standard SMTP transport.
 * If credentials are not set, it will fallback to a sandbox / console logging setup.
 */
function createTransport() {
  const host = process.env.SMTP_HOST || "";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";

  if (!host || !user || !pass) {
    console.warn("SMTP environment variables are not configured. Emails will be logged to console instead.");
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for others
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends a confirmation email to the customer and a notification email to the owner.
 */
export async function sendPaymentEmail(params: SendPaymentEmailParams) {
  const transporter = createTransport();
  const from = process.env.SMTP_FROM || `"Omnitrix Web Solutions" <${process.env.SMTP_USER || "info@omnitrixweb.com"}>`;
  const notificationEmail = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || "keshavladha24@gmail.com";

  const formattedAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(params.amount);

  // --- Customer Email Body ---
  const customerHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Payment Successful - Omnitrix Web Solutions</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f7fbff; color: #1e293b; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 24px auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #02040a; padding: 32px 24px; text-align: center; border-bottom: 2px solid #1adbf5; }
          .header h1 { color: #ffffff; font-size: 24px; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
          .content { padding: 32px 24px; line-height: 1.6; }
          .success-badge { display: inline-block; padding: 6px 12px; background: rgba(26, 219, 245, 0.1); border: 1px solid #1adbf5; color: #008899; font-weight: bold; border-radius: 99px; font-size: 13px; margin-bottom: 16px; }
          .details-card { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; }
          .details-row { display: flex; justify-content: space-between; border-bottom: 1px solid #e2e8f0; padding: 8px 0; font-size: 14px; }
          .details-row:last-child { border-bottom: none; }
          .details-label { color: #64748b; font-weight: 500; }
          .details-value { color: #0f172a; font-weight: bold; }
          .steps { margin: 24px 0; }
          .step-item { display: flex; margin-bottom: 16px; }
          .step-number { width: 24px; height: 24px; background: #1adbf5; color: #02040a; font-weight: bold; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; margin-right: 12px; flex-shrink: 0; }
          .step-text h4 { margin: 0; color: #0f172a; font-size: 14px; }
          .step-text p { margin: 4px 0 0 0; color: #64748b; font-size: 12px; }
          .footer { background: #02040a; padding: 24px; text-align: center; color: #64748b; font-size: 12px; }
          .footer a { color: #1adbf5; text-decoration: none; }
          .btn { display: inline-block; background: #1adbf5; color: #02040a; text-decoration: none; padding: 12px 24px; border-radius: 99px; font-weight: bold; text-align: center; font-size: 14px; margin-top: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Omnitrix Web Solutions</h1>
          </div>
          <div class="content">
            <span class="success-badge">✔ Payment Successful</span>
            <h2 style="margin-top: 0; color: #0f172a;">Thank you, ${params.clientName}!</h2>
            <p>We have successfully received your advance payment for your digital build. Our team is already preparing to bring your platform online.</p>
            
            <div class="details-card">
              <div class="details-row">
                <span class="details-label">Client Name</span>
                <span class="details-value">${params.clientName}</span>
              </div>
              <div class="details-row">
                <span class="details-label">Selected Package</span>
                <span class="details-value">${params.packageName}</span>
              </div>
              <div class="details-row">
                <span class="details-label">Amount Paid</span>
                <span class="details-value" style="color: #00a8cc;">${formattedAmount} INR</span>
              </div>
              <div class="details-row">
                <span class="details-label">Transaction ID</span>
                <span class="details-value" style="font-family: monospace; font-size: 12px;">${params.paymentId}</span>
              </div>
              <div class="details-row">
                <span class="details-label">Order ID</span>
                <span class="details-value" style="font-family: monospace; font-size: 12px;">${params.orderId}</span>
              </div>
            </div>

            <h3 style="color: #0f172a;">What happens next?</h3>
            <div class="steps">
              <div class="step-item">
                <div class="step-number">1</div>
                <div class="step-text">
                  <h4>We confirm your order</h4>
                  <p>A coordinator will follow up via WhatsApp or email within 1 hour.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">2</div>
                <div class="step-text">
                  <h4>Discovery Call</h4>
                  <p>We schedule a brief call to align on your branding preferences and local audience targeting.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">3</div>
                <div class="step-text">
                  <h4>Visual Design Core</h4>
                  <p>Our developers begin crafting your UI layouts immediately. You will receive a preview link to review progress.</p>
                </div>
              </div>
            </div>

            <div style="text-align: center;">
              <a href="https://api.whatsapp.com/send?phone=+917027340360" class="btn">Chat on WhatsApp</a>
            </div>
          </div>
          <div class="footer">
            <p>Questions? Contact us at <a href="mailto:info@omnitrixweb.com">info@omnitrixweb.com</a> or call +91 70273 40360</p>
            <p>&copy; 2026 Omnitrix Web Solutions. Ellenabad, Sirsa, Haryana.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // --- Admin Notification Email Body ---
  const adminHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Payment Received - Omnitrix</title>
        <style>
          body { font-family: sans-serif; padding: 20px; background: #f1f5f9; color: #0f172a; }
          .card { background: white; border-radius: 12px; padding: 24px; border: 1px solid #cbd5e1; max-width: 500px; margin: 0 auto; }
          h2 { color: #0284c7; margin-top: 0; }
          .detail-item { margin-bottom: 12px; font-size: 14px; }
          .label { font-weight: bold; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>💰 New Payment Verified!</h2>
          <p>Great job! A client has successfully completed their payment on the platform.</p>
          <hr style="border: none; border-top: 1px dashed #cbd5e1; margin: 20px 0;">
          <div class="detail-item"><span class="label">Customer Name:</span> ${params.clientName}</div>
          <div class="detail-item"><span class="label">Customer Email:</span> ${params.clientEmail}</div>
          <div class="detail-item"><span class="label">Customer Phone:</span> ${params.clientPhone}</div>
          <div class="detail-item"><span class="label">Package:</span> ${params.packageName}</div>
          <div class="detail-item"><span class="label">Amount:</span> ${formattedAmount} INR</div>
          <div class="detail-item"><span class="label">Payment ID:</span> ${params.paymentId}</div>
          <div class="detail-item"><span class="label">Order ID:</span> ${params.orderId}</div>
        </div>
      </body>
    </html>
  `;

  // --- Send Emails ---
  if (!transporter) {
    console.log("================= PAYMENTS SANDBOX SIMULATOR =================\n");
    console.log(`[CUSTOMER CONFIRMATION] Sent to: ${params.clientEmail}`);
    console.log(`[ADMIN NOTIFICATION] Sent to: ${notificationEmail}`);
    console.log(`Subject: Payment Successful - ${params.packageName}`);
    console.log(`Amount: ${formattedAmount}`);
    console.log(`Payment ID: ${params.paymentId}`);
    console.log("==============================================================\n");
    return { success: true, simulated: true };
  }

  try {
    // 1. Send confirmation to the client
    const clientMailPromise = transporter.sendMail({
      from,
      to: params.clientEmail,
      subject: `Payment Successful! - Omnitrix Web Solutions`,
      html: customerHtml,
    });

    // 2. Send notification to the administrator
    const adminMailPromise = transporter.sendMail({
      from,
      to: notificationEmail,
      subject: `💰 New Payment Received: ${formattedAmount} from ${params.clientName}`,
      html: adminHtml,
    });

    await Promise.all([clientMailPromise, adminMailPromise]);
    console.log("Payment emails successfully sent via SMTP transporter.");
    return { success: true, simulated: false };
  } catch (error) {
    console.error("Failed to send payment confirmation email:", error);
    // Do not crash the entire payment confirmation route if email fails
    return { success: false, error };
  }
}
