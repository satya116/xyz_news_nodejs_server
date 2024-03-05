const { GetObjectCommand } = require("@aws-sdk/client-s3");

const client = require("./s3_client");

const getFileFromS3 = async () => {
  const command = new GetObjectCommand({
    Bucket: "test-bucket",
    Key: "hello-s3.txt",
  });

  try {
    const response = await client.send(command);
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    const str = await response.Body.transformToString();
    console.log(str);
  } catch (err) {
    console.error(err);
  }
};

module.exports = getFileFromS3;