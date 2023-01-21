import React from 'react';
import {useParams} from "react-router-dom"
import {useGetPostByIdQuery} from "../../store/postApi";
import {Link} from "react-router-dom"
import {loremString} from "../../utils";
import {createTheme, ThemeProvider} from "@mui/material";
import Container from '@mui/material/Container';


import './style.scss'

const Post = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetPostByIdQuery(id)
    if(isLoading) return (
        <div>
            Loading...
        </div>
    )

    const theme = createTheme({
        components:{
            MuiContainer:{
                styleOverrides:{
                    root:{
                        position:"relative",
                        overflow:"hidden",
                        paddingTop: "150px",
                        paddingBottom:"45px",
                        "::before":{
                            content:'""',
                            background: `url(${data.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPositionY: "30%",
                            position: "absolute",
                            top: "0",
                            width:"100%",
                            height: "245px",
                        }
                    }
                }
            }
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters={true} maxWidth={false} >
                <div className="post__content">
                    {/*<img src={data.imageUrl} alt=""/>*/}
                    <h2>{data.title}</h2>
                    <p>{data.summary}
                        {loremString}
                    </p>
                </div>
                <Link className="post__link link-before" to='/'>
                    Back to homepage
                </Link>
            </Container>
        </ThemeProvider>
    );
};

export default Post;