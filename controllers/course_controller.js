// const MockTestModel = require("../models/mock_test_model");
const CourseModel = require("../models/course_model");

class CourseController {

    async createCourse(req, res) {
        let course = req.body;

        CourseModel.create(course).then(
            () => {
                res.status(200).json({
                    success: true,
                    data: "create course success",
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

    async getAllCourse(req, res) {
        try {
            let allCourse = await CourseModel.find();
            res.status(200).json({
                success: true,
                data: allCourse,
            });
        } catch (error) {
            console.error('Error retrieving documents:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getCourse(req, res) {

        let courseId = req.params.course_id

        try {
            let course = await CourseModel.findById(courseId).exec();
            res.status(200).json({
                success: true,
                data: course,
            });
        } catch (error) {
            console.error('Error retrieving documents:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async updateCourse(req, res) {
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

    async deleteCourse(req, res) {

        let courseId = req.params.course_id
        try {
            let course = await CourseModel.findByIdAndDelete(courseId);
            res.status(200).json({
                success: true,
                data: course,
            });
        } catch (error) {
            console.error('Error retrieving documents:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async approveCourse(req, res) {
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
}

module.exports = new CourseController();