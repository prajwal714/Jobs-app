import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Job from './job'


class Jobs extends Component {
    
    render() { 
        return ( 
            <div className="jobs">

            <Typography variant="h2">
                All the Entry level Jobs are listed here:
            </Typography>
            {
                this.props.jobs.map(job=><Job job={job}></Job>)
            }
            </div>
         );
    }
}
 
export default Jobs;