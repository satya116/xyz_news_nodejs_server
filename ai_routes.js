const ai_router = require('express').Router();

const { GoogleGenerativeAI } = require("@google/generative-ai");

ai_router.post("/test", async (req, res) => {

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    let prompt = req.body.prompt;
    console.log(prompt);

    // For text-only input, use the gemini-pro model
    // const prompt = "Who is the prime minister of india?"
    let result;
    try {
        result = await model.generateContent(prompt);
        // throw new Error("efrgf5tgtg6gy")
    } catch (error) {
        res.status(404).json({
            success: false,
            body: error,
        });
    }
    const response = result.response;
    // text = response.text();
    // console.log(JSON.stringify(response));


    // res.status(200).json(JSON.parse(JSON.stringify(response)));
    try {
        res.send(response?.candidates[0]?.content?.parts[0]?.text);

    } catch (error) {
        console.log(error);
        res.status(403).json({
            success: false,
            body: {
                message: error.message,
            }
        });
    }

});

module.exports = ai_router;

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// async function run() {
//   // For text-only input, use the gemini-pro model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro"});

//   const chat = model.startChat({
//     history: [
//       {
//         role: "user",
//         parts: "Hello, I have 2 dogs in my house.",
//       },
//       {
//         role: "model",
//         parts: "Great to meet you. What would you like to know?",
//       },
//     ],
//     generationConfig: {
//       maxOutputTokens: 100,
//     },
//   });

//   const msg = "How many paws are in my house?";

//   const result = await chat.sendMessage(msg);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();

//...

// const result = await model.generateContentStream([prompt, ...imageParts]);

// let text = '';
// for await (const chunk of result.stream) {
//   const chunkText = chunk.text();
//   console.log(chunkText);
//   text += chunkText;
// }

// //...

//...

// const result = await model.generateContentStream([prompt, ...imageParts]);

// let text = '';
// for await (const chunk of result.stream) {
//   const chunkText = chunk.text();
//   console.log(chunkText);
//   text += chunkText;
// }

// //...