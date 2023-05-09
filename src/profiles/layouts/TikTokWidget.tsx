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
    Avatar
} from "@mui/material"
import axios from 'axios'

export const TikTokWidget = () => {

    const [tiktokWidget, setTikTokWidget] = React.useState<Array<any>>([]);

    React.useEffect(() => {
        const getWidget = async () => {
            let result = await axios.get('/api/auth/tiktok/getWidgets');
            console.log("result", result);
            setTikTokWidget(result!.data);
        }
        getWidget()
    }, [])

    return (
        <div>
            {tiktokWidget &&
                tiktokWidget.map((ele, id) =>
                    id < 2 &&
                    <Card sx={{ maxWidth: 345 }} key={id}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={ele.cardItem.cover}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {ele.cardItem.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {ele.cardItem.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <a href={`https://www.tiktok.com/${ele.cardItem.link}`}>Learn More</a>
                        </CardActions>
                    </Card>
                )
            }</div>
    )
}
