import React, { Component } from 'react';




const Job = ({job}) => {
    return ( 
        <div className="job">
            {
              job.title}{job.company
            }
        </div>
     );
}
 
export default Job;