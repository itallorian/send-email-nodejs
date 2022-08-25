import config from "config";
import nodemailer from "nodemailer";

const sender = nodemailer.createTransport({
    host: config.get("smtp.host"),
    service: config.get("smtp.host"),
    port: config.get("smtp.port"),
    secure: true,
    auth: {
        user: config.get("smtp.email"),
        pass: config.get("smtp.password")
    }
});

class CommunicationService {
    static SendEmail = (req, res) => {
        const { to, subject, text } = req.body;

        const template = {
            from: config.get("smtp.email"),
            to: to,
            subject: subject,
            text: text
        }

        sender.sendMail(template, (err) => {
            if (err) {
                res.status(500).send({ message: "An unexpected error occurred while sending the email.", exception: err.message });
            } else {
                res.status(204).send();
            }
        });
    }
}

export default CommunicationService;