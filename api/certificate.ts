import type { VercelRequest, VercelResponse } from '@vercel/node';
import PDFDocument from 'pdfkit';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Allow CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, moduleName } = req.body;

    if (!name || !moduleName) {
        return res.status(400).json({ error: 'Missing name or moduleName' });
    }

    try {
        const doc = new PDFDocument({
            layout: 'landscape',
            size: 'A4',
        });

        // Set headers for PDF download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=Certificate_${name.replace(/\s+/g, '_')}.pdf`);

        // Pipe PDF to response
        doc.pipe(res);

        // -- DESIGN CERTIFICATE --

        // Background / Border
        doc.rect(20, 20, doc.page.width - 40, doc.page.height - 40).stroke('#D4AF37'); // Gold border
        doc.rect(25, 25, doc.page.width - 50, doc.page.height - 50).stroke('#D4AF37'); // Inner gold border

        // Header
        doc.fontSize(40).font('Helvetica-Bold').fillColor('#1a1a1a').text('CERTIFICATE', 0, 100, { align: 'center' });
        doc.fontSize(20).font('Helvetica').fillColor('#666666').text('OF ATTENDANCE', 0, 150, { align: 'center' });

        // Body
        doc.moveDown(2);
        doc.fontSize(15).fillColor('#333333').text('This is to certify that', { align: 'center' });

        doc.moveDown(1);
        doc.fontSize(30).font('Helvetica-Bold').fillColor('#D4AF37').text(name, { align: 'center' });

        doc.moveDown(1);
        doc.fontSize(15).font('Helvetica').fillColor('#333333').text('has successfully completed the module:', { align: 'center' });

        doc.moveDown(0.5);
        doc.fontSize(20).font('Helvetica-Bold').fillColor('#1a1a1a').text(moduleName, { align: 'center' });

        doc.moveDown(2);
        doc.fontSize(12).font('Helvetica').fillColor('#666666').text('Provided by Ecoswift Football & Digital Initiative', { align: 'center' });

        // Date
        const date = new Date().toLocaleDateString();
        doc.fontSize(12).text(`Date: ${date}`, 60, doc.page.height - 80);

        // Signature placeholder
        doc.text('Signature: __________________________', doc.page.width - 300, doc.page.height - 80);

        // Finalize PDF
        doc.end();

    } catch (error: any) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate certificate' });
    }
}
