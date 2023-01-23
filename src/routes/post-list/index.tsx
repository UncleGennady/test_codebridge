import React, {useEffect, useState} from 'react';
import SearchField from "../../components/search-field";
import './style.scss';
import PostCard from "../../components/post-card";
import {useGetPostQuery} from "../../store/postApi";
import {IPost} from "../../modal";
import Container from '@mui/material/Container';
import {addPosts, filterPosts} from "../../store/slice/postList";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";


const PostList = () => {
    const initialValue:string = ''
    const [searchString, setSearchString] = useState(initialValue)
    const {data, isLoading} = useGetPostQuery()
    const dispatch = useDispatch()

    useEffect(()=>{
        !!data && dispatch(addPosts(data))
        !!searchString && dispatch(filterPosts(searchString))
    },[searchString])

    const posts = useSelector((state:RootState)=>state.postList.posts)

    const changeHandler = (event:any) => {
        setSearchString(event.target.value)
    }
    const renderCards = (data:IPost[])=> {
        return data.map((i:IPost)=>{
            return(<PostCard key={i.id}  imageUrl={i.imageUrl} title={i.title} publishedAt={i.publishedAt} summary={i.summary} id={i.id}/>)
            }
        )
    }

    return (
        <Container>
            <div>
                <div className="post-list__search">
                    <p>Filter by keywords</p>
                    {!! data && <SearchField data={data} changeHandler={changeHandler}/>}
                    <p className="post-list__result-line">results: {!!searchString ? posts.length: !!data && data.length}</p>
                </div>
                <div className="post-list__cards">
                    {!!searchString ? renderCards(posts) : !!isLoading ? "Loading..." : !! data && renderCards(data)}
                </div>
            </div>
        </Container>
    );
};

export default PostList;