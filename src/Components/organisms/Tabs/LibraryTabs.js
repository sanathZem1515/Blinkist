import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import { Tab } from '@material-ui/core';
import React from 'react';
import TextItems from '../../atoms/TextItem/TextItem';
import { useHistory } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    flexGrow: 10,
    maxWidth: 900,
    paddingRight: 20,
    boxShadow:"none"
  },
  library:{
    paddingTop: "10px",
  }

});

export default function LibraryTabs(props) {
    const [value, setValue] = useState(0);
  const history = useHistory();


  const viewStore = useSelector(state => state.view);
  console.log(viewStore);
  const viewDispatch = useDispatch();   

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const handleCurrentBooks=(event)=>{
      const text=event.target.innerText;
      console.log(event);
      if(text==="Currently Reading")
      {
      props.handleCurrentBooks("0");
    viewDispatch({ type: 'library' });

      history.push("/current");
      }
      else
      {
          props.handleCurrentBooks("2");
          viewDispatch({ type: 'finished' });

          history.push("/finished");

      }
   
  };
  return (
    <React.Fragment>
    <TextItems className={classes.library} name="My Library" variant="h4"/>
    <Paper square className={classes.root}>
      
      <Tabs
      data-testid="libraryTest"
      value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        inkBarStyle={{background: '#22c870'}}>
        <Tab label="Currently Reading" onClick={handleCurrentBooks}/>
        <Tab label="Finished" onClick={handleCurrentBooks}/>
      </Tabs>
    </Paper>
    </React.Fragment>
  );
}
