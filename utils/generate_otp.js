const crypto = require('crypto');

class GenerateOTP {
    async generateOTP() {
        let otp = await crypto.randomInt(10000,99999);
        return otp;

    }
}

module.exports = new GenerateOTP();