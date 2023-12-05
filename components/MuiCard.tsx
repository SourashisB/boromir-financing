import React, {FunctionComponent} from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


interface MuiCardProps{
    imageLink: string,
    title: string,
    basetext: string,
    clickURL: string
}

export const MuiCard: FunctionComponent<MuiCardProps> = ({imageLink, title, basetext, clickURL}) => {

    const handleClick = (url:string) => {
        window.location.href = url;
      };

    return (
        <Card sx={{maxWidth: 345, height: 400, marginLeft: "20px", marginRight: "20px"}} onClick={() => {handleClick(clickURL)}} >
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="200"
                    image={imageLink}
                    alt='Commercial Banking'
                    sx={{paddingTop: '0%'}}/>
                    <CardContent>
                        <Typography variant="h4" color={'black'} style={{ 'marginLeft': "10px" }}>{title}</Typography>
                        <Typography variant="body1" style={{ "scale": '1.0', "marginLeft": "15px" }}>{basetext}</Typography>
                    </CardContent>
            </CardActionArea>
        </Card>           

    )
}