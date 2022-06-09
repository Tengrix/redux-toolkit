import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../customHooks/cusomHooks';
import {useParams} from 'react-router-dom';
import {fetchPostById} from '../../store/PostsReducer';

const SinglePost = () => {
    const {id} = useParams<{id:string}>()
    const dispatch = useAppDispatch()
    const post = useAppSelector(state => state.post)
    console.log(id)
    useEffect(()=>{
        dispatch(fetchPostById(+id))
    },[])
    console.log(post)
    return (
        <div>
            <h3> <strong> {post.id}. {post.title} </strong> </h3>
            <div> {post.body} </div>
        </div>
    );
};

export default SinglePost;