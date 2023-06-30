import nodemailer from "nodemailer";


const email = "anzianasseke@gmail.com";
const pass = "plbiazezbuowqfmn";


export const transporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    auth : {
        user : email,
        pass : pass
    },
});

export const mailOptions = {
    from : email,
    to : "yann.ci@yeswecange.com",
}