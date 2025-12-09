import { VercelRequest, VercelResponse } from '@vercel/node';
import { validateAdmin } from './_utils/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const user = await validateAdmin(req, res);
    if (!user) return;

    const { to, subject, body } = req.body;

    try {
        // Stub for email sending logic (e.g. Resend, SendGrid)
        console.log(`Sending email to ${to}: ${subject}`);

        // await resend.emails.send({ ... });

        res.status(200).json({ message: 'Email queued' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
