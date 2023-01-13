import React, {useState} from 'react';

import Post from "./Components/Post";
import './Styles/News.css'

const News = () => {

    const [posts] = useState([
        {id:1, title:"matvey", body:"красавчик просто"},
        {id:2, title:"matvey", body:"красавчик лучший"},
        {id:3, title:"matvey", body:"красавчик капец"},
        {id:4, title:"matvey", body:"красавчик просто"},
        {id:5, title:"matvey", body:"красавчик лучший"},
        {id:6, title:"matvey", body:"красавчик капец"},
        {id:7, title:"matvey", body:"красавчик просто"},
        {id:8, title:"matvey", body:"красавчик лучший"},
        {id:9, title:"matvey", body:"красавчик капец"},
        {id:10, title:"matvey", body:"красавчик просто"}
    ])

    return (
        <div className="news-page">
            <div className="container-news">
                <div className="content">
                    <h1 className="title-home" >
                        News
                    </h1>
                    <div className="posts__item">
                        {posts.map(post =>
                            <Post post = {post} key = {post.id} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;