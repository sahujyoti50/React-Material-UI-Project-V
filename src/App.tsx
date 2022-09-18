import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";
import FormHelperText from "@mui/material/FormHelperText";
function App() {
  {//* Radio,RadioGroup,FormLabel,FormControlLabel,Box,FormHelperText,Radio with useState*/}
  const [value,setValue]=useState("");
  console.log(value);
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-lable">Years of Experience</FormLabel>
        <RadioGroup name="job-experience-group" row value={value} onChange={(e)=>{setValue(e.target.value)}} >
          <FormControlLabel control={<Radio  size="small" color="success"/>} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio size="small" color="warning"/>} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio size="small" color="error"/>} label="6-7" value="6-7" />
       </RadioGroup>
       <FormHelperText error>Invalid Seletion</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default App;
