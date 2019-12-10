
let fetch =require('node-fetch');
let redis =require('redis'),
client=redis.createClient();

const {promisify}=require("util");
//const getAsync=promisify(client.get).bind(client);
const setAsync=promisify(client.set).bind(client);

const baseUrl ="https://jobs.github.com/positions.json";

async function fetchGithub()
{
    let resultCount=1;
    let pageNum=0;
    const allJobs=[];
    while(resultCount>0)
    {
        const res=await fetch(`${baseUrl}?page=${pageNum}`);
        const jobs=await res.json();
       
      
        console.log("Got jobs: ",jobs.length);
        allJobs.push(...jobs);
        resultCount=jobs.length;
        pageNum++;

    }
    console.log("Total Jobs: ", allJobs.length);
    const success=await setAsync('github', JSON.stringify(allJobs));
    console.log({success});
}
fetchGithub();
module.exports=fetchGithub;