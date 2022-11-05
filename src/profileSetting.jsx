import { Box, Button, Card, CardContent, Switch, Toolbar, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { React, useState } from "react";
import CardComponent from "./cardComponent";

export default function Profilesetting() {

  const [influencer, setInfluencer] = useState('tell abt influencers')
  const [connection, setConnection] = useState('mention ur connections')
  const [wannabe, setWannabe] = useState('wt u wanna become')
  const [influencerState, setInfluencerState] = useState(true)
  const [connectionState, setConnectionState] = useState(true)
  const [wannabeState, setWannabeState] = useState(true)

  const editInfluencer = () => {
    setInfluencerState(false)
  }

  const editConnection = () => {
    setConnectionState(false)
  }

  const editWannabe = () => {
    setWannabeState(false)
  }

  const updateInfluencer = (e) => {
    setInfluencer(e.target.value)
  }

  const updateConnection = (e) => {
    setConnection(e.target.value)
  }

  const updateWannabe = (e) => {
    setWannabe(e.target.value)
  }

  const confirmState = (e) => {
    setInfluencerState(true)
    setConnectionState(true)
    setWannabeState(true)
  }
  console.log('influencer ', influencer)
  console.log('connection ', connection)
  console.log('wanna be ', wannabe)
  return (
    <center>
      <Box sx={{ maxWidth: '50%' }}>

        <CardComponent title='My Influencers' msgs={influencer} state={influencerState}
          updateMsg={updateInfluencer} editMsg={editInfluencer} />
        <br />

        <CardComponent title='MyConnections' msgs={connection} state={connectionState}
          updateMsg={updateConnection} editMsg={editConnection} />
        <br />

        <CardComponent title='I wanna be' msgs={wannabe} state={wannabeState}
          updateMsg={updateWannabe} editMsg={editWannabe} />
        <br />
        <Button variant="contained" onClick={confirmState} sx={{color:'primary'}}>Save</Button>
        {
          [{ name: 'Nikkmartin01', icon: <MusicNoteIcon /> }, { name: 'Nikkmartin01', icon: <InstagramIcon /> },
          { name: 'Nikkmartin01', icon: <LinkedInIcon /> }].map((el, index) => {
            return (
              <div key={index}>
                <Card>
                  <CardContent>
                    <Toolbar>{el.icon} {el.name}
                      <Typography sx={{ marginLeft: '500px' }}>Publicly view</Typography >
                      <Switch /> 
                      <EditIcon sx={{ marginLeft: '5px' }} />
                    </Toolbar>
                  </CardContent>
                </Card> <br />
              </div>
            )
          })
        }
      </Box>
    </center>
  )
}