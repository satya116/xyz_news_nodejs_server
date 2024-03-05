const { PutObjectCommand, } = require("@aws-sdk/client-s3");
const client = require("./s3_client");

// const client = new S3Client({
//     credentials: {
//         accessKeyId: "AKIAZD2RU2TTFVWSKRWQ" || process.env.AWS_ACCESS_KEY,
//         secretAccessKey: "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" || process.env.AWS_SECRET_KEY,
//     },
//     region: 'us-east-1'
// });

// console.log(client);

const uploadFileToS3 = async () => {
    const command = new PutObjectCommand({
        Bucket: "extendtech-test-delete",
        Key: "new-s3.jpeg",
        Body: `Helllo there`,
        // ContentType: "image/jpeg",
        // ContentEncoding: "base64"
    });

    try {
        const response = await client.send(command);
        console.log(response);
    } catch (err) {
        console.error("Error Message: ", err.message);
    }
};

module.exports = uploadFileToS3;

// main();

