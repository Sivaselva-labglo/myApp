import React from "react";
import { Card, CardContent, CardHeader, Switch, TextField, Toolbar, Typography, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export default function CardComponent(props) {
  return (
    <Card>
      <Toolbar>
        <CardHeader title={props.title} />
        <Typography sx={{ marginLeft: '480px' }}>Publicly view</Typography >
        <Switch />
        <IconButton onClick={props.editMsg}>
          <EditIcon sx={{ marginLeft: '5px' }} />
        </IconButton>
      </Toolbar>
      <CardContent>
        <TextField multiline fullWidth value={props.msgs} disabled={props.state} onChange={props.updateMsg} />
      </CardContent>
    </Card>

  )
}