import React from 'react';
import {Link} from 'react-router-dom';
import {IPostsTypes} from '../../types/postsTypes';
import s from './Posts.module.scss'

const Post = (post: IPostsTypes) => {
    return (
        <div className={s.posts}>
            <Link to={`/posts/${post.id}`}>
                <div>
                    <h3>{post.id}: {post.title}  </h3>
                </div>
                <div>{post.body}</div>
            </Link>
        </div>
    );
};

export default Post;