import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../customHooks/cusomHooks';
import {fetchAllPosts} from '../../store/PostsReducer';
import Post from '../Post/Post';
import Loading from '../../utils/Loading/Loading';


const PostsList = () => {
    const dispatch = useAppDispatch()
    const {data:posts,isLoading,error} = useAppSelector(state => state)
    useEffect(()=>{
        dispatch(fetchAllPosts())
    },[])
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            {error && error}
            {posts && posts.map(posts=>
                <Post key={posts.id} {...posts}/>
            )}
        </div>
    );
};

export default PostsList;