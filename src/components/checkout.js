import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const useStyles =makeStyles({
    root:{
        margin:10
    },
    yes:{
        color:'pink',
        padding:10,
        textAlign:'center'
    }
})
const Checkout = () =>  {
    const classes = useStyles()
  const [value, setValue] = useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
  
    <form>
     <FormLabel className={classes.yes}>INPUT YOUR CREDENTIALS HERE PLEASE </FormLabel>
      <div>
        <TextField
        classes={classes.root}
          label="User name"
          placeholder="insert your name here please"
          type="text"
          fullWidth
          maxRows={4}
          variant="outlined"
        />
        <hr/>
        <TextField
          label="Age"
          placeholder="insert your name here please"
          type="number"
        
          maxRows={4}
          variant="outlined"
        />
        <hr/>
        <TextField
          label="Telephone number"
          placeholder="Placeholder"
          placeholder="insert your tel no here please"
         type="tel"
         fullWidth
         variant="outlined"
        />
       
        <hr/>
      </div>
      <div>
      
        <hr/>
        <TextField
          label="Email"
          type="email"
          placeholder="insert your email here please"
          multiline
          fullWidth
          variant="outlined"
          
        />
        <hr/>
      <FormControl>
      <FormLabel>Select the region</FormLabel>
      <RadioGroup >
        <FormControlLabel value="western" control={<Radio/>} label="western"/>
        <FormControlLabel value="Central" control={<Radio/>} label="Central"/>
        <FormControlLabel value="north" control={<Radio/>} label="north"/>
        <FormControlLabel value="estern" control={<Radio/>} label="estern"/>
        </RadioGroup>
        </FormControl>
        
      </div>
      <div>
      <hr/>
      
        <Button color="secondary" variant="contained">Submit</Button>
       
      </div>
    </form>
  );
} 
export default Checkout
