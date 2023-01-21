import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"
import {IPostCard} from "../../modal";
import{getDate, cuttingString, loremString} from "../../utils";
import "./style.scss"

export default function PostCard(props:IPostCard) {

    const daysAgo = getDate(props.publishedAt)
    console.log(daysAgo)
    return (
        <Card className="post-card" sx={{ maxWidth: 365, boxShadow:'0px 8px 24px 0px rgb(0 0 0 / 5%), 0px 0px 1px 1px rgb(0 0 0 / 5%)', display:"flex", flexDirection: "column", justifyContent: "space-between"}}>
            <div className="post-card__wrapper-image">
                <img src={props.imageUrl} alt="#"/>
            </div>
            <CardContent sx={{p:3}}>
                <Typography sx={{ fontSize: 14, m:0, pb:3, color:"#868181"}} color="text.secondary" gutterBottom >
                    <p className='post-card__date'>{daysAgo}</p>
                </Typography>
                <Typography sx={{ fontSize: 24,pb:3 }} variant="h3" component="div">
                    {props.title}
                </Typography>

                <Typography sx={{ fontSize: 16}} variant="body2">
                    {cuttingString(props.summary)}
                </Typography>
            </CardContent>
            <CardActions sx={{p:0, px:3, pb:3}}>
               <Link className="post-card__link link-after" to={`/post/${props.id}`}>Read more</Link>
            </CardActions>
        </Card>
    );
}