import React from 'react';
import SearchField from "../../components/search-field";
import './style.scss';
import PostCard from "../../components/post-card";
import {useGetPostQuery} from "../../store/postApi";
import {IPost} from "../../modal";
import Container from '@mui/material/Container';


const PostList = () => {

    const {data, isLoading} = useGetPostQuery()
    console.log(data)
    const renderCards = (data:IPost[])=> {
        return data.map((i:IPost)=>{
            return(<PostCard key={i.id}  imageUrl={i.imageUrl} title={i.title} publishedAt={i.publishedAt} summary={i.summary} id={i.id}/>)
            }
        )
    }
    return (
        <Container>
            <div>
                <p>Filter by keywords</p>
                <p>The most successful IT companies in 2020</p>
                <SearchField/>
                <hr/>
                <div className="post-list__cards">
                    {!!isLoading ? "Loading..." : !! data && renderCards(data)}
                </div>
            </div>
        </Container>
    );
};

export default PostList;