import React from 'react';
import './App.module.scss';
import PostsList from './components/PostsList/PostsList';
import s from './App.module.scss'
import {Route, Switch} from 'react-router-dom';
import SinglePost from './components/SinglePost/SinglePost';
// https://jsonplaceholder.typicode.com/posts
// Fetch the data using axios and render a list
// The list will be a list of cards
// Clicking on each card will route to the post's details
// Implement using TypeScript
// Implement Redux (optional)
// Implement basic styling
function App() {

    return (
        <div className={s.main}>
            <Switch>
                <Route exact path={'/'}>
                    <PostsList/>
                </Route>
                <Route path={'/post/:id'}>
                    <SinglePost/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
