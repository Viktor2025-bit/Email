
require("dotenv").config()

const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : process.env.EMAIL,
        pass : process.env.PASSWORD
    }
})


 const mailOptions = {
    from : "kaluvictor130@gmail.com",
    to : "ryandebby772@gmail.com",
    subject : "Email tutorial testing",
    text : "Finally learnt this!"
 }


 transporter.sendMail(mailOptions)
 .then(() => {
    console.log("Email sent!!!")
 })
 .catch((err) => {
    console.log("An error occured", err)
 })