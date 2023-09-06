import mail from "../services/mail.js"

export const sendMail = async (req, res, next) => {
    try {
        let Forminfo = {
                Name: req.body.Name,
                ContactNumber: req.body.ContactNumber,
                Email: req.body.EmailId,
                Course: req.body.Course,
                Service: req.body.Service,
                Subject: req.body.subject
        }
        const data = await mail(Forminfo)
        return res.status(200).json({ message: 'Enruiry submited', status: true });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'something went wrong...', status: false });
    }
}
