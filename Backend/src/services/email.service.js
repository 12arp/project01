import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    },
    tls:{
        rejectUnauthorized:false
    }
});
export const sendShopkeeperCredentials = async (email, password) => {
  const htmlContent = `
    <div style="background-color: #f8f9fa; padding: 40px 10px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 500px; width: 100%; background-color: #ffffff; border: 1px solid #dee2e6; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
        <!-- Header using your Indigo Brand Color -->
        <tr>
          <td style="background-color: #6610f2; padding: 25px; border-top-left-radius: 12px; border-top-right-radius: 12px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-weight: 600;">Shopkeeper<span style="color: #e0d0ff;">CRM</span></h2>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding: 30px;">
            <h4 style="color: #212529; margin-top: 0; font-size: 20px;">Welcome to the Portal!</h4>
            <p style="color: #6c757d; line-height: 1.5; font-size: 15px;">Your shop account has been created. Use the temporary credentials below to get started.</p>
            
            <!-- Credentials Box -->
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <p style="margin: 0; color: #495057; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;"><strong>Login Email:</strong></p>
              <p style="margin: 5px 0 15px 0; color: #6610f2; font-family: monospace; font-size: 16px; font-weight: bold;">${email}</p>
              
              <p style="margin: 0; color: #495057; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;"><strong>Temporary Password:</strong></p>
              <p style="margin: 5px 0 0 0; color: #6610f2; font-family: monospace; font-size: 16px; font-weight: bold;">${password}</p>
            </div>

            <!-- SECURITY ALERT -->
            <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 12px; margin-bottom: 25px; border-radius: 4px;">
              <p style="margin: 0; color: #856404; font-size: 14px;">
                <strong>⚠️ Security Note:</strong> Please <strong>change your password</strong> immediately after your first login for better security.
              </p>
            </div>

            <!-- CTA Button -->
            <div style="text-align: center;">
              <a href="http://localhost:3000/shop-login" style="background-color: #6610f2; color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
                Login to Dashboard
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #adb5bd; font-size: 12px; margin: 0;">
              Need help? Contact your System Administrator.<br>
              &copy; ${new Date().getFullYear()} Shopkeeper CRM
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;

  await transporter.sendMail({
    from: '"Shopkeeper CRM" ',
    to: email,
    subject: "Action Required: Your Shop Account is Ready 🔑",
    html: htmlContent, 
  });
};
