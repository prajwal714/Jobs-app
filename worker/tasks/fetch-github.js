let fetch =require('node-fetch');
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
}
fetchGithub();
module.exports=fetchGithub;