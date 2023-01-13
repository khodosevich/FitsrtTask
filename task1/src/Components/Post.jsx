import React from 'react';
import './../Styles/Posts.css'

const Post = (props) => {
    return (
        <div className="post">
            <div className="post-item">
                <div className="content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <p className="text__post">
                        {props.post.body}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Post;