import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import {IPost} from "../../modal";

const initialState: {posts:IPost[]}= {
    posts:[]
}

const filterPostsID = (posts:IPost[], filterField:'title'|'summary', localState:any, word:string) => {
    posts.forEach((post:IPost, index)=>{
        const stringArr:string[]= post[filterField].split(' ');
        const check:boolean =  !!(stringArr.find((item:string)=>{
            return item.toLowerCase() === word.toLowerCase()
        }));

        if(check){
            stringArr.forEach((i:string,index)=>{
                if(i.toLowerCase() === word.toLowerCase())  stringArr[index] = `<mark>${i}</mark>`
            })
            posts[index][filterField] = stringArr.join(' ')
            return localState.add(post.id)
        }
    })
}


const concatResultsInArray = ([...results])=>{
    const localState = new Set();
    results.forEach(i=>
        i.forEach((id:number)=> localState.add(id))
    )
    return Array.from(localState);
}

const createFilteredPosts = ( posts:IPost[], idArr: number[]| any) => {
    const newPosts:IPost[] = [];
    for (const id of idArr) {
        const newPost:IPost| any = posts.find((i:IPost)=>i.id === id);
        newPosts.push({...newPost})
    }
    return newPosts
}



export const postListSlice = createSlice({
        name: 'postList',
        initialState,
        reducers: {
            addPosts:(state, action:PayloadAction<IPost[]> ) =>{
                state.posts = [...action.payload ]
            },
            filterPosts:(state,action:PayloadAction<string> ) =>{
                const localStateForTitle = new Set ();
                const localStateForBody = new Set ();
                const wordsArr:string[] = action.payload.split(" ");

                for (const word of wordsArr) {
                    filterPostsID(state.posts, 'title', localStateForTitle, word)
                    filterPostsID(state.posts, 'summary', localStateForBody, word)
                }

                const localStateArr = concatResultsInArray([localStateForTitle, localStateForBody])

                const newPosts:IPost[] = createFilteredPosts(state.posts, localStateArr)

                state.posts = [...newPosts]
            }

        }
    }
)

export const {addPosts, filterPosts} = postListSlice.actions

export default postListSlice.reducer