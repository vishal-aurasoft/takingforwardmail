import nodemailer from 'nodemailer';
function mail(Forminfo) {
    let flag = false;
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        port: 587,
        secure: true,
        auth: {
            user: 'vaibhav.aurasoft@gmail.com',
            pass: 'avjulakvbjgyfdmg'
        }
    });
    var mailOptions = {
        from: '" <isai.thompson93@ethereal.email>',
        to: "vishal.aurasoft@gmail.com",
        subject: Forminfo?.Subject,
        text: "Enquiry Submited",
        html: `<a href=${Forminfo.Course ? "https://aurasoftsolutions.com/taking-forward/" : "https://aurasoftsolutions.com/taking-forward/contactus.html?"}>This is a enquiry from ${Forminfo.Course ? "Course" : "Service"} form</a>
        <br/>
        <p>Name:-${Forminfo.Name}</p>
    <p>E-mail:-${Forminfo.Email}</p>
    <p>Contact Number:-${Forminfo.ContactNumber}</p>
    <p>${Forminfo.Course ? "Course:-" + Forminfo.Course : "Service:-" + Forminfo.Service}</p>

    `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        error ? flag = false : flag = true;
    });
    return flag;
}
export default mail;