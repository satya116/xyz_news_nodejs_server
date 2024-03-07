const UserModel = require("../models/user_model");
const S3 = require("../services/s3");


class UserController {

    async createUser(req, res) {
        let user = req.body;

        // let uploadResponse = S3.uploadFileToS3();
        // console.log(uploadResponse);
        // res.send("succeed");
        // return;

        UserModel.create(user).then(
            () => {
                res.status(200).json({
                    success: true,
                    data: "create user success",
                });
                // check if logged in
                // get the req.
                // create mongodb instance
            }
        ).catch((error) => {
            console.error('Error retrieving documents:', error);
            res.status(500).json({ success: false, message: error.message });
        });
    }

    async getAllUser(req, res) {
        try {
            let allUser = await UserModel.find();
            res.status(200).json({
                success: true,
                data: allUser,
            });
        } catch (error) {
            console.error('Error retrieving documents:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getUser(req, res) {

        let userId = req.params.user_id

        try {
            let user = await UserModel.findById(userId).exec();
            res.status(200).json({
                success: true,
                data: user,
            });
        } catch (error) {
            console.error('Error retrieving documents:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            // let allMockTest = await MockTestModel.find();
            // res.status(200).json({
            //     success: true,
            //     data: allMockTest,
            // });
        } catch (error) {
            console.error('Error retrieving documents:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async deleteUser(req, res) {

        let userId = req.params.user_id
        try {
            let user = await UserModel.findByIdAndDelete(userId);
            res.status(200).json({
                success: true,
                data: user,
            });
        } catch (error) {
            console.error('Error retrieving documents:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = new UserController();