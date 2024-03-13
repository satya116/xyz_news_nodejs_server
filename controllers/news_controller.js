const NewsModel = require("../models/news_model");

// bulk news creation
// await Character.create([{ name: 'Will Riker' }, { name: 'Geordi LaForge' }]);

class NewsController {

    async createNews(req, res) {

        const { news_title, news_in_short, news_in_detail, tags, news_image_url, news_video_url, admin_access_token } = req.body;

        if (admin_access_token != process.env.ADMIN_ACCESS_TOKEN) {
            return res.send("You are not allowed to create news");
        }

        try {
            await NewsModel.create({ news_title, news_in_short, news_in_detail, tags, news_image_url, news_video_url });
            res.status(200).json({
                success: true,
                data: "News created success",
            });
        } catch (error) {
            console.error('Error retrieving documents:', error);
            res.status(500).json({ success: false, message: error.message });
        }

        // NewsModel.create(news).then(
        //     () => {
        //         res.status(200).json({
        //             success: true,
        //             data: "News created success",
        //         });
        //         // check if logged in
        //         // get the req.
        //         // create mongodb instance
        //     }
        // ).catch((error) => {
        //     console.error('Error retrieving documents:', error);
        //     res.status(500).json({ success: false, message: error.message });
        // });
    }

    async getAllNews(req, res) {

        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

        try {
            let allNews = await NewsModel.find({
                created_at: { $gte: threeDaysAgo },
                is_approved: true, // Only approved news
                is_blocked: false, // Only unblocked news
            }).sort({ created_at: -1 }).exec();
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