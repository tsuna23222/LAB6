import nodemailer from 'nodemailer';
import config from '../config.json';

export default async function sendEmail({ to, subject, html, from = config.emailFrom }: any) {
    try {
        const transporter = nodemailer.createTransport({
            ...config.smtpOptions,
            connectionTimeout: 5000,
            greetingTimeout: 5000,
            socketTimeout: 5000
        } as any);
        await transporter.sendMail({ from, to, subject, html });
    } catch (error) {
        console.error('Email sending failed:', error);
        // Don't throw - allow registration to succeed even if email fails
    }
}
