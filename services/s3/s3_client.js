const { S3Client } = require("@aws-sdk/client-s3");

const client = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,// "AKIAZD2RU2TTFVWSKRWQ" || process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY, // "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" ||
    },
    region: process.env.AWS_S3_REGION //  'us-east-1'
});

module.exports = client;