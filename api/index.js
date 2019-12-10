let express=require("express");
const app=express();
let redis =require('redis'),
client=redis.createClient();

const {promisify}=require("util");
const getAsync=promisify(client.get).bind(client);

const port=process.env.PORT||3001;

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Jobs App Backend</h1>");
});


app.get('/jobs',async (req,res)=>{
    const jobs =await getAsync('github');
    console.log(JSON.parse(jobs).length);
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000')
    res.send(jobs);
})

app.listen(port,(err)=>{
    if(!err)
    console.log(`Server started at ${port}`);

    else
    console.log(err);
})