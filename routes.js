const router = require('express').Router();

const news_controller = require('./controllers/mock_test_controller');
// const course_controller = require('./controllers/course_controller');
const user_controller = require('./controllers/user_controller');
const file_uploader_controller = require('./controllers/file_uploader_controller');
// const auth_controller = require('./controllers/auth_controller');
// const { generateOTP } = require('./utils/authentication');
// const S3StorageService = require('./services/s3/uploadImage');
// const multer = require('multer');
// const upload = multer({ dest: './uploads/' });

// router.post("/send-otp", auth_controller.sendOtp);
// // router.post("/upload-carousel-image", upload.single('carfile'), S3StorageService.uploadImage);
// router.post("/upload-carousel-image", upload.single('carfile'), (req, res) => {
//     console.log(req.body);
//     console.log(req.file);
// });

// user_controller
router.post("/create-user", user_controller.createUser);
router.get("/team/users", user_controller.getAllUser);
router.get("/user/:user_id", user_controller.getUser);
router.put("/update-user/:user_id", user_controller.updateUser);
router.delete("/delete-user/:user_id", user_controller.deleteUser);

// news_controller
router.post("/team/create-news", news_controller.createNews);
router.get("/news", news_controller.getAllNews);
router.get("/news/:news_id", news_controller.getNews);
router.put("/team/news/:news_id", news_controller.updateNews)
router.delete("/team/news/:news_id", news_controller.deleteNews);

// course_controller
// router.post("/team/create-course", course_controller.createCourse);
// router.get("/courses", course_controller.getAllCourse);
// router.get("/course/:course_id", course_controller.getCourse);
// router.put("/team/update-course/:course_id", course_controller.updateCourse)
// router.delete("/team/delete-course/:course_id", course_controller.deleteCourse)

// mock_test_controller
// router.post("/team/create-mocktest", mock_test_controller.createMockTest);
// router.get("/mocktests", mock_test_controller.getAllMockTest);
// router.get("/mocktest/:mock_test_id", mock_test_controller.getMockTest);
// router.put("/mocktest/:mock_test_id", mock_test_controller.updateMockTest)
// router.delete("/mocktest/:mock_test_id", mock_test_controller.deleteMockTest);


// team_S3_controller
router.post("/team/upload-image", file_uploader_controller.uploadFileToS3);
router.post("/team/upload-video", file_uploader_controller.uploadFileToS3);

// router.get("/team/mocktests", mock_test_controller.getAllMockTest);
// router.get("/team/mocktest/:mock_test_id", mock_test_controller.getMockTest);
// router.put("/team/mocktest/:mock_test_id", mock_test_controller.updateMockTest)
// router.delete("/team/mocktest/:mock_test_id", mock_test_controller.deleteMockTest);

// testimonial_controller
// router.post("/create-user", user_controller.createUser);
// router.get("/team/users", user_controller.getAllUser);
// router.get("/user/:user_id", user_controller.getUser);
// router.put("/update-user/:user_id", user_controller.updateUser)
// router.delete("/delete-user/:user_id", user_controller.deleteUser)

module.exports = router;