import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import Loaderpage from "../loader";

export default function Eventspage() {
  const [load,setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoad(false), 1000)
    
  }, [])
  
  return (
    <div>
      <Loaderpage loader={load}/>
      <center>
      <Typography sx={{ mt: '300px' }}>No events scheduled</Typography>
      </center>
    </div>
  )
}