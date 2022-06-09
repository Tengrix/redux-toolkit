import {createAsyncThunk, createSlice, isRejectedWithValue} from '@reduxjs/toolkit';
import {IDataType, IPostsTypes} from '../types/postsTypes';
import {getPostById, getPosts} from '../axios/postsAPI';

const initialState: IDataType = {
    data: [],
    isLoading: false,
    error: '',
    post: {} as IPostsTypes,
}

export const fetchAllPosts = createAsyncThunk('posts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await getPosts()
        return response.data
    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
})
export const fetchPostById = createAsyncThunk('posts/fetchSinglePost', async (id: number, thunkAPI) => {
    try {
        const response = await getPostById(id)
        return response.data
    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
})

const slice = createSlice({
    initialState,
    name: 'posts',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllPosts.pending, (state, action) => {
            state.isLoading = true
        })
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
                state.error = ''
            })
            .addCase(fetchAllPosts.rejected, (state) => {
                state.isLoading = false
                state.error = 'ERROR'
            })
        builder.addCase(fetchPostById.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.isLoading = false
                state.post = action.payload
                state.error = ''
            })
            .addCase(fetchPostById.rejected, (state) => {
                state.isLoading = false
                state.error = 'ERROR'
            })
    }
})

export const PostsReducer = slice.reducer