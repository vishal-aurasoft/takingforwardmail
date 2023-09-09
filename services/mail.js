import nodemailer from 'nodemailer';
import env from "dotenv"

env.config();
function mail(to,Forminfo) {
    let flag = false;
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        port: 587,
        secure: true,
        auth: {
            // user: process.env.Email,
            user: 'info.takingforward@gmail.com',
            // pass: `${process.env.password}`,
             pass:'tbwliddkbsdewspq'
        }
    });
    console.log(process.env.Email,process.env.password)
    var mailOptions = {
        from: "info.takingforward@gmail.com",
        to: to,
        subject: Forminfo?.Subject,
        text: "Enquiry Submited",
        html: `<a href=${Forminfo.Course ? "https://aurasoftsolutions.com/taking-forward/" : "https://aurasoftsolutions.com/taking-forward/contactus.html?"}>This is a enquiry from ${Forminfo.Course ? "Course" : "Service"} form</a>
        <br/>
        <p>Name :- ${Forminfo.Name}</p>
    <p>E-mail :- ${Forminfo.Email}</p>
    <p>Contact Number :- ${Forminfo.ContactNumber}</p>
    <p>${Forminfo.Course ? "Course :- "  + Forminfo.Course : "Service :- " + Forminfo.Service}</p>    `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        error ? flag = false : flag = true;
    });
    return flag;
}
export default mail;
