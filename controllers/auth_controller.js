const GenerateOTP = require("../utils/generate_otp");
const HashOtpData = require("../utils/hash_otp");

class AuthController {

    async sendOtp(req, res) {

        let otp = await GenerateOTP.generateOTP();
        console.log(otp);
        let phone = req.body.phone;

        let ttl = 1000 * 60 * 2;
        let expiresIn = Date.now() + ttl;
        console.log(phone);

        let hashData = `${phone}.${otp}.${expiresIn}`;

        hashData = await HashOtpData.hashOtpData(hashData);

        

        res.send({ hashData: hashData });


    }

}

module.exports = new AuthController();