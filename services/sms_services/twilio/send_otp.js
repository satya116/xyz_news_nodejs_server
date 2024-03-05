// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.messages
//     .create({
//         body: 'You have an appointment with Owl, Inc. on Friday, November 3 at 4:00 PM. Reply C to confirm.',
//         messagingServiceSid: 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//         to: '+917002479326',
//         from:
//     })
//     .then(message => console.log(message.sid));


// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "ACd2136891c8a231a9e24c5d2813bc880d";
const authToken = "90c2fa71cc3eb161e70c3d8c662969bc";
const verifySid = "VA1c3410533bb0ab15bf161f607edcb147";
const client = require("twilio")(accountSid, authToken);

client.verify.v2
    .services(verifySid)
    .verifications.create({ to: "+917002479326", channel: "sms" })
    .then((verification) => console.log(verification.status))
    .then(() => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question("Please enter the OTP:", (otpCode) => {
            client.verify.v2
                .services(verifySid)
                .verificationChecks.create({ to: "+917002479326", code: otpCode })
                .then((verification_check) => console.log(verification_check.status))
                .then(() => readline.close());
        });
    });