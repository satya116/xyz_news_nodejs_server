// const UserModel = require("../models/user_model");
// const S3 = require("../services/s3");

class FileUploaderController {

    async uploadFileToS3(req, res) {

        console.log("Uploading file");

        // courseId
        // videoId
        // userId

         const file = req.files;
         console.log("file file", file);

         res.send("Uploading file");

    }

}

module.exports = new FileUploaderController();