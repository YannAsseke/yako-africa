import { NextApiRequest, NextApiResponse } from "next";
import {google} from "googleapis";
import  { transporter, mailOptions } from "../../config/nodemailer";




export default async function handler(
    req = NextApiRequest,
    res= NextApiResponse
) {
    if(req.method !== 'POST'){
        return res.status(405).send({ message: 'Only POST requests allowed' })
    }
    const data = req.body;
    var showdate = new Date();
    var displaytodaysdate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    var dt = showdate.toDateString();
    var displaytime = showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();
    var datetime = displaytodaysdate+' - '+displaytime;
    
    const { Name, Number, Email,Prestation, Message  } = req.body;
    
    
      var CONTACT_MESSAGE_FIELDS = {
        Name : "Nom & Prénoms",
        Number : "Numéro de téléphone",
        Email : "E-mail",
        Prestation : "Prestation",
        Message : "Message",
      };
      var subject = "Prospect YAKO AFRICA";

      var GOOGLE_CLIENT_EMAIL = "sheet-yako@sheet-yakoafrica.iam.gserviceaccount.com";
      var GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC40rxPNwwNuHS4\nFyTJsNt/e2RJCZ3pObIExSMwODG5lwfK6egbtEW9b0E8vvMrqz9CFS6i8dAnSOkn\nFDj4CdkmN+goeHm49wiW824xUNv8iXKhMBC1KRPGVnnT2zlR6mdp7/TLU/jWeHZl\n3bjk/oRVKQWcTJZVr7akVQWll3IdI7p+yW2JusWTz8/H9EIBu5oMicx/7eL85PWa\nUBA9JpIkmcx9qabvgEHNt8uoBFo2xhvTrs76Z3uvVtbh3sHyBWqvKakY0HCM2VaE\nCbOn1/X6ZncfqL+C3SqfF4PI/INNMoH9hs6ua0Hi75mds7Kswgq8Jb2iuYmslzXb\njyIzVtytAgMBAAECggEAGjHf95g1MKKihE7fa2iSC4TpB0MCKwJ+3Rc1sAle3s9t\njtBNEdQgiENC60GjBF7uhcarx/NezZqTVPMUSe9XZAfLcyT0F4eHo6FXzkyICUhP\nw1GlJI/wWg16kdDB1H7U7lpQhxrdK0SCf1iH8oiyJ8G7JlZifj17tNnKBZir1z4x\nfqo787WjJO3o+3p46r8FJrGazdpZxHJHKjqDKBFaiKx/nGsXcCcjug4mrVoaUwKg\nOh27KT716pFEKC+dps3ITGatXXsTzS66A7QmRBpILtdEwn2BI7sdzjKLK9i4QqqH\nLOH1dWYNuDIYX2u2pzUyU6OSFtq4LdpZ++ZQ+DbBDwKBgQD1Xh751BbfxIMm9rsS\noyLyXRcR1FAy0r9VfUBHw4txNtDoNRmBOKVWKnFprBlKHrm1tCdy0/lxs5j0asf/\njdaEkL9r5r/gbAusvwUK0q6B0+jDckWClJM2GHYxdfpK2k8OHKjE6+Fsd6DsFoNl\nx/QDlBxnIRBV78cR0KTSnkyjvwKBgQDA1P2rSaruBWZubrU9ZFu4ds2nIX1suoKS\nXESQxakAtZZILjIH1NpmbieQLRfRJ8X5X+0Ub+dtQdaIHyXsHvAnTyhAMgLbgA2j\n+E38fK0XPSzOwzjxL9JhhVbF1dRszdFkDA06FAWl5a7go7K3gHIY8BAgGmxABxpP\n1IBs3WiqkwKBgQCf99AMIukS1ESJV5yZRwCWsHhE6H2s1NdnPfR1lRhJJGrIqS3K\noIqyhZNRSKFoQGXk/+IkK+zZ4zRaTW+8vdVYsiIKj/MStn5aDmOULc0V2XlMSyjk\nPEdJomMUVg1rVa7qzWZ+lCZwmAGzSe46okUFPD/UQKssy9mmVLfQlOH0cwKBgQCZ\nbyClEYn7uLpHdrmprtg4j/eVW9WEFWfd86LvGwgds19v8aoHhzt8s3uxgd/ooeAq\nTETFtUENM4zzZO100y096gNaCTEy3NJ9vQ64r6++xQOJRddiOi4JQOLJqhpLtP0+\nwUQpCVNxLLAYuMh0sLSY2TPLh5rI2535FVpWxVoKFwKBgEkmm7l0Rhk1BU7rYhJk\n7eYby2peEMTPNJIhTqKImZk//3NC3ZKK50QTvr7WUzyAFmkKzrHsfJ5gvLQU6kRQ\nm+PJXKbXM4mp1dxq96WYEhkWjHuIKmSRa0r+vYGm63Ryv4FJHUigPjG2GU5jb/Ut\nmqcpo6Y33pbIaafHFnlVePmH\n-----END PRIVATE KEY-----\n"?.replace(/\\n/g, '\n');
      var GOOGLE_SHEET_ID = "1y7VrUgnE8DNTsIbRN_YAmDEwyCOM89IXfkWmwEVvJ2I";
      var CONTACT_YAKO = "yann.ci@yeswecange.com";
    

    const generateEmailContent = (data) => {
        const stringData = Object.entries(data).reduce(
            (str, [key, val]) =>  
                 (str += `${CONTACT_MESSAGE_FIELDS[key]} : \n ${val}} \n \n`),
            "");
        
        const htmlData = Object.entries(data).reduce(
            (str, [key, val]) =>  
                 (str += `<h1 className="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h1><p className="form-answer">${val}</p>`),
            ""
        );
    
        return {
            text : stringData, 
            html : `<!DOCTYPE html>
            <html>
              <head>
                <title></title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <style type="text/css">
                  body,
                  table,
                  td,
                  a {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                  }
                  table {
                    border-collapse: collapse !important;
                  }
                  body {
                    height: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100% !important;
                  }
                  @media screen and (max-width: 525px) {
                    .wrapper {
                      width: 100% !important;
                      max-width: 100% !important;
                    }
                    .responsive-table {
                      width: 100% !important;
                    }
                    .padding {
                      padding: 10px 5% 15px 5% !important;
                    }
                    .section-padding {
                      padding: 0 15px 50px 15px !important;
                    }
                  }
                  .form-container {
                    margin-bottom: 24px;
                    padding: 20px;
                    border: 1px dashed #ccc;
                  }
                  .form-heading {
                    color: #2a2a2a;
                    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                    font-weight: 400;
                    text-align: left;
                    line-height: 20px;
                    font-size: 18px;
                    margin: 0 0 8px;
                    padding: 0;
                  }
                  .form-answer {
                    color: #2a2a2a;
                    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                    font-weight: bold;
                    text-align: left;
                    line-height: 20px;
                    font-size: 16px;
                    margin: 0 0 24px;
                    padding: 0;
                  }
                  div[style*="margin: 16px 0;"] {
                    margin: 0 !important;
                  }
                </style>
              </head>
              <body style="margin: 0 !important; padding: 0 !important; background: #fff">
                <div
                  style="
                    display: none;
                    font-size: 1px;
                    color: #fefefe;
                    line-height: 1px;
                    max-height: 0px;
                    max-width: 0px;
                    opacity: 0;
                    overflow: hidden;
                  "
                ></div>
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="center"
                      style="padding: 10px 15px 30px 15px"
                      className="section-padding"
                    >
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="max-width: 500px"
                        className="responsive-table"
                      >
                        <tr>
                          <td>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td>
                                  <table
                                    width="100%"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          padding: 0 0 0 0;
                                          font-size: 16px;
                                          line-height: 25px;
                                          color: #232323;
                                        "
                                        className="padding message-content"
                                      >
                                        <h2>Informations : </h2>
                                        <div className="form-container">${htmlData}</div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
            </html>`,
        };
    }

    try {

      await transporter.sendMail({
        from : "YESWECANGE <anzianasseke@gmail.com>",
        to : CONTACT_YAKO,
        subject : subject,
        ...generateEmailContent(data),
      });

        const auth = new google.auth.GoogleAuth({
            credentials: {
                //keyFile: "volkswagen-landing-page-975fe0259781.json",
                
               client_email: GOOGLE_CLIENT_EMAIL,
                private_key: GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })
    
        const sheets = google.sheets({
            auth,
            version: 'v4'
        });
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: GOOGLE_SHEET_ID,
            range: 'A1:F1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [Name, Number, Email, Prestation, Message, datetime]
                ]
            }
        });
    
        return res.status(201).json({})
    }catch (e) {
       // return res.status(e.code).send({message: e.message})
        console.log(e)
        res.status(500).send(e.message);
    }

    
}