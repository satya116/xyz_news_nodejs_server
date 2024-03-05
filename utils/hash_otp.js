const crypto = require('crypto');


class HashOtp{
    async hashOtpData(data) {
        return await crypto.createHmac('sha256','secreteeee').update(data).digest('hex');


    }

}

module.exports  = new HashOtp();