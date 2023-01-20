import React from 'react';
import {useParams} from "react-router-dom"
import {useGetPostByIdQuery} from "../../store/postApi";
import {Link} from "react-router-dom"
import {loremString} from "../../utils";

import './style.scss'

const Post = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetPostByIdQuery(id)
    if(isLoading) return (
        <div>
            Loading...
        </div>
    )
    return (
        <div>
            current post {id}
            <img src={data.imageUrl} alt=""/>
            <h2>{data.title}</h2>
            <p>{data.summary}
                {loremString}
            </p>
            <Link className="link link-before" to='/'>
                Back to homepage
            </Link>
        </div>
    );
};

export default Post;