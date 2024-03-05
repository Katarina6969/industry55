"use server"
import { Resend } from 'resend'

export async function sendMail() {
    const resend = new Resend('process.env.customKey ')
    console.log(process.env.customKey)
    console.log("send email")
    try {
        const resp = resend.emails.send({
            from: 'mail@industry55.cz',
            to: 'sub722@gmail.com',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        })
        console.log(resp)
    } catch (error) {
        console.log(error)
    }

}