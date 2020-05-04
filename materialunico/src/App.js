import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';




function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));

  

  const classes = useStyles();

  return (
    <div>
    <Button 
    variant="outlined"
     color="primary"
     size="large"
     >
      Hello World
    </Button>
   
    
      
      <input
        accept=""
        className={classes.input}
        id="contained-button-file"
        multiple
        type=""
      />
      <label htmlFor="contained-button-file">
        <Button
         variant="contained"
         size="small"
        color="secondary"
           component="span"
           
           
           >
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span"
        rows={2}>
          <PhotoCamera />
        </IconButton>
      </label>
      </div>
   
  );
};


export default App;
