import React from 'react';
import {IPost} from "../../modal";
import "./style.scss"


const SearchField = (props:{data: IPost[], changeHandler:any})=>{

    return (
        <div className="search-glass">
            <input onChange={props.changeHandler} type="text" placeholder="Search…" />
        </div>
    );
}
export default SearchField