const uploadFileToS3 = require("./put-object");
const getFileFromS3 = require("./get-object");

const S3 = {
    uploadFileToS3,
    getFileFromS3,
}

module.exports = S3;