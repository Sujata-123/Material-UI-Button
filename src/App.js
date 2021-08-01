import React from 'react';
import './style.css';
import { Button,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  helloThereStyle:{
       fontStyle:"Oblique",
       color:"red",
       fontSize:"30px"
  },
  buttonStyle:{
    color:'green',

  },
  root: {
    backgroundColor: 'red',
    color: props => props.color,
  },
});






export default function App() {
  const classes=useStyles();
  return (
    <>
    <div>
      {/* <h1>Hello there</h1> */}
      <Typography color="primary" className={classes.helloThereStyle}>Hello there</Typography>
      {/* <Button disabled={true}>This is our first button</Button> */}
      {/* <Button fullWidth>This is our first button</Button> */}
     
      <Button color="secondary" className={classes.buttonStyle} variant="outlined">This is our first button</Button>
      {/* <Button variant="contained" color='primary'>This is our first button</Button> */}
      {/* <Button variant="text">This is our first button</Button> */}

    </div>
    </>
  );
}
export default App;