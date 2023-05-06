import React from "react";
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Box, Card, CardContent, Stack, Tooltip, Typography } from "@mui/material";


export default function AppListBox({ app, handleAddAppClick, avaliable }: any) {

  return (
    <Grid xs={12} sm={6} md={4} lg={3} spacing={5} >

      <Tooltip title={app.added ? "Edit App" : "Add " + app.name}>
        <Card
          // sx={{ display: 'flex' }}
          // variant={app.added ? "owned" : "outlined"}
          // raised
          style={{ cursor: 'pointer' }}
          className={app.added ? "owned" : ""}
          variant={app.added ? "outlined" : "elevation"}
          // variant={"outlined"}
          sx={{ display: 'flex' }}
          onClick={(e) => handleAddAppClick(e, app.site_name)}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexDirection: 'end' }}>
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{ bgcolor: "transparent" }}
                  style={{ flexDirection: "column", alignItems: 'center', justifyContent: "center", display: "flex" }}
                >
                  {app.icon}
                </Avatar>
                <div>
                  <Typography component="div" variant="h5">
                    {app.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" component="div">
                    {app.description}
                  </Typography>
                </div>
                <div>
                  {
                    avaliable ?
                      (
                        <DoneIcon />
                      ) :
                      (
                        <AddIcon />
                      )
                  }
                </div>
              </Stack>
            </CardContent>
          </Box>
        </Card>
      </Tooltip>
    </Grid>
  )
}
