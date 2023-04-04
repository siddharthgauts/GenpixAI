const{Configuration, OpenAIApi} = require("openai");

///console.log(process.env.OPEN_AI_KEY)
const configuration = new Configuration({
    organization: process.env.OPEN_AI_ORGANIZATION,
    apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports=openai;