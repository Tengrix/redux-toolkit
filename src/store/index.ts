import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {PostsReducer} from './PostsReducer';

export const store = configureStore({
    reducer:PostsReducer,

})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch