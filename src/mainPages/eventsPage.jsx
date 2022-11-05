import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";

export default function Eventspage() {
    const [state, setState] = useState(true)
    console.log('eventsPage')

    useEffect(() => {
        setTimeout(()=>setState(false), 1000)
    }, [])
    return (
        <div>
            {
                (state)
                    ? <center><CircularProgress sx={{ mt: '300px' }}/>
                    </center>                   : <center>
                        <Typography sx={{ mt: '300px' }}>No events scheduled</Typography>
                    </center>
            }
        </div>
    )
}