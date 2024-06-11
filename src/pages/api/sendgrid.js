import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        console.log("REQ.BODY", req.body);
        await sendgrid.send({
            to: "jamespeppas@outlook.com",
            from: "contact@prestigelodgedigital.com",
            subject: `${req.body.subject}`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      <body>

      <div
        class="img-container"
        style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"
      ></div>
      <div class="container" style="margin-left: 20px;margin-right: 20px;">
        <h3>
          You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email}{" "}
        </h3>
        <div style="font-size: 16px;">
          <p>Message:</p>
          <p>${req.body.message}</p>
          <br />
        </div>
      </div>
        
      <div style="margin: 0 !important; padding: 0 !important; width: 100% !important;">
        <div
          style="font-family: Arial, sens-serif; color: #180e07; font-size: 13px; line-height: 1.3;"
          class="template-template1 is-flipped-false font-family-arial font-size font-family text-color"
        >
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="border-collapse: collapse !important; font-size: inherit;"
          >
            <tr>
              <td>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                  style="border-collapse: collapse !important; font-size: inherit;"
                >
                  <tr>
                    <td
                      style="padding-bottom: 6px; font-family: Arial, sens-serif; font-size: 13px;"
                      class="sign-off"
                    >
                      Best regards
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="font-weight: 700; color: #180e07; font-family: Arial, sens-serif; font-size: 14px;"
                      class="name title-color"
                    >
                      Prestige Lodge
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; border-bottom: 1px solid #333333;">
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="border-collapse: collapse !important; font-size: inherit;"
                      >
                        <tr>
                          <td
                            style="font-family: Arial, sens-serif; font-size: 13px;"
                            class="company"
                          >
                            Elevating Hospitality Online
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 6px;">
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="border-collapse: collapse !important; font-size: inherit;"
                      >
                        <tr>
                          <td
                            style="font-family: Arial, sens-serif; font-size: 13px;"
                            class="phone"
                          >
                            +30 694 353 1213
                          </td>
                          <td style="padding-left: 10px;">
                            <a
                              href="mailto:contact@prestigelodgedigital.com"
                              style="color: #180e07 !important; text-decoration: underline !important; font-size: 13px !important; font-family: Arial, sens-serif !important; font-weight: inherit !important; line-height: inherit !important;"
                              class="email"
                            >
                              contact@prestigelodgedigital.com
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 6px;">
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        style="border-collapse: collapse !important; font-size: inherit;"
                      >
                        <tr>
                          <td
                            style="font-family: Arial, sens-serif; font-size: 13px;"
                            class="address"
                          >
                            Piraeus, Greece
                          </td>
                          <td style="padding-left: 11px;">
                            <a
                              href="https://prestigelodgedigital.com"
                              style="color: #180e07 !important; text-decoration: underline !important; font-size: 13px !important; font-family: Arial, sens-serif !important; font-weight: inherit !important; line-height: inherit !important;"
                              class="website link-color"
                            >
                              prestigelodgedigital.com
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
      </body>
            `,
        });
    } catch (error) {
        // console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}

export default sendEmail;