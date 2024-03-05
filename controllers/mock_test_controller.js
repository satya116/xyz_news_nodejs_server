const NewsModel = require("../models/mock_test_model");

class NewsController {

    async createNews(req, res) {
        let news = req.body;

        NewsModel.create(news).then(
            () => {
                res.status(200).json({
                    success: true,
                    data: "News created success",
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

    async getAllNews(req, res) {
        try {
            let allNews = await NewsModel.find();
            res.status(200).json({
                success: true,
                data: allNews,
            });
        } catch (error) {
            console.error('Error retrieving documents:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getNews(req, res) {

        let newsId = req.params.news_id

        try {
            let news = await NewsModel.findById(newsId).exec();
            res.status(200).json({
                success: true,
                data: news,
            });
        } catch (error) {
            console.error('Error retrieving documents:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async updateNews(req, res) {
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

    async deleteNews(req, res) {

        let newsId = req.params.news_id
        try {
            let news = await NewsModel.findByIdAndDelete(newsId);
            res.status(200).json({
                success: true,
                data: news,
            });
        } catch (error) {
            console.error('Error retrieving documents:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async approveNews(req, res) {
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

module.exports = new NewsController();