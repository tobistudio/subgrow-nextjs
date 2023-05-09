import React from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  CardActionArea,
  Avatar
} from "@mui/material"

import axios from 'axios'

export const TikTokWidget = () => {

  const [tiktokWidget, setTikTokWidget] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    const getWidget = async () => {
      let result = await axios.get('/api/auth/tiktok/getWidgets');
      setTikTokWidget(result!.data);
    }
    getWidget()
  }, [])

  return (
    <div className='tiktok-widget'>
      {tiktokWidget &&
        tiktokWidget.map((ele, id) =>
          id < 2 &&
          <Card sx={{
            my: {
              xs: 5,
              sm: 6,
              md: 7,
              lg: 8,
              xl: 10
            },
            mx: 5,
            maxWidth: 500

          }} key={id}>
            <CardActionArea>
              <CardMedia
                sx={{ height: 140 }}
                image={ele.cardItem.cover}
                title={ele.cardItem.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {ele.cardItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {ele.cardItem.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Stack direction="row" spacing={2}>
              <Button
                variant="cardactionbtn"
                size="small">
                Share
              </Button>

                <Button
                  href={`https://www.tiktok.com/${ele.cardItem.link}`}
                  target="_blank"
                  variant="cardactionbtn"
                  size="small"
                  >
                  View More
                </Button>
              </Stack>

            </CardActions>
          </Card>
        )
      }
    </div>
  )
}
