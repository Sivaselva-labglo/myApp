import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";

export default function Loaderpage(props) {
  const [state, setState] = useState(true)
  console.log('eventsPage')

//   useEffect(() => {
//     setTimeout(() => setState(false), 1000)
//   }, [])
  return (
    <div>
        {
            props.loader ? <center> <CircularProgress sx={{ mt: '300px' }} /> </center>
            : ' '
        }
    
    </div>
  )
}