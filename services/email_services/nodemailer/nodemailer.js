const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "emil29@ethereal.email",
        pass: "8Uq3VaDA6JeUppJsG9",
    },
});

class EmailServices {
    async sentEmail(args) {

        const info = await transporter.sendMail({
            from: 'satyaram116@gmail.com', // sender address
            to: "satyaram116@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
    }
}

lol =  new EmailServices();
lol.sentEmail();