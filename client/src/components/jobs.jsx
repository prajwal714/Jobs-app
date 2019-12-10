import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Job from './job'

const maxSteps=6;



export default function Jobs({jobs}){

    
        const [activeStep, setActiveStep] = React.useState(0);

        const handleNext = () => {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
          };
        
          const handleBack = () => {
            setActiveStep(prevActiveStep => prevActiveStep - 1);
          };
        console.log(jobs[0])
        return ( 
            <div className="jobs">

            <Typography variant="h4" component="h1">
                All the Entry level Jobs are listed here:
            </Typography>
            {
                jobs.map(job=><Job  job={job}></Job>)
            }
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                   <KeyboardArrowLeft /> 
                    Back
                </Button>
        }
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    <KeyboardArrowRight /> 
                </Button>
                }
      />
            </div>
         );
    }

 
