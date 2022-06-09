import React from 'react';
import { Link } from 'react-router-dom';
import {IPostsTypes} from '../../types/postsTypes';
import s from './Posts.module.scss'

const Post = (post: IPostsTypes) => {
    return (
        <div className={s.posts}>
            <div>
                <h3>{post.id}: <Link to={`/post/${post.id}`}> {post.title} </Link> </h3>
            </div>
            <div>{post.body}</div>
        </div>
    );
};

export default Post;