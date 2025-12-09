const CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY!;
const CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET!;
const PASSKEY = process.env.MPESA_PASSKEY!;
const SHORTCODE = '174379'; // Test shortcode, replace with env var if needed
const CALLBACK_URL = process.env.MPESA_CALLBACK_URL!;

export async function getMpesaToken() {
    const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
    const response = await fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
        headers: {
            Authorization: `Basic ${auth}`,
        },
    });
    const data = await response.json();
    return data.access_token;
}

export function generatePassword() {
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
    const password = Buffer.from(`${SHORTCODE}${PASSKEY}${timestamp}`).toString('base64');
    return { password, timestamp };
}

export async function initiateSTKPush(phone: string, amount: number, reference: string) {
    const token = await getMpesaToken();
    const { password, timestamp } = generatePassword();

    // Format phone number (ensure 254...)
    let formattedPhone = phone.replace('+', '').replace(/^0/, '254');

    const response = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            BusinessShortCode: SHORTCODE,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: amount,
            PartyA: formattedPhone,
            PartyB: SHORTCODE,
            PhoneNumber: formattedPhone,
            CallBackURL: CALLBACK_URL,
            AccountReference: reference,
            TransactionDesc: `Payment for ${reference}`,
        }),
    });

    return response.json();
}
