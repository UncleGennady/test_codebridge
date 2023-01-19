import React from 'react';
import './App.css';
import{Routes, Route} from "react-router-dom"
import {Container} from "@mui/material";
import Post from "./routes/post";
import PostList from "./routes/post-list";


function App() {
  return (
    <div className="App">
        <Container>
            <Routes>
                <Route path="/" element={<PostList/>} />
                <Route path="post/:id" element={<Post/>} />
                <Route path="/*" element={<div> Oops... page not found</div>} />
            </Routes>
        </Container>
    </div>
  );
}

export default App;
