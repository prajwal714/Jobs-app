
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

    //fetch all pages
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

    //filter results
    const jrJobs=allJobs.filter(job=>{
        const jobTitle=job.title.toLowerCase();
       

        if(jobTitle.includes('senior')||jobTitle.includes('manager')||jobTitle.includes('sr.')||jobTitle.includes('architect')||jobTitle.includes("expert"))
        return false;

        return true;
    })

    console.log("filtered down to: ",jrJobs.length);
    //set in redis
    const success=await setAsync('github', JSON.stringify(jrJobs));
    console.log({success});
}
module.exports=fetchGithub;