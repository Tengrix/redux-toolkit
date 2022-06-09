import React from 'react';
import './App.module.scss';
import PostsList from './components/PostsList/PostsList';
import s from './App.module.scss'
import {Redirect, Route, Switch} from 'react-router-dom';
import SinglePost from './components/SinglePost/SinglePost';
import Navbar from './components/Navbar/Navbar';
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
                    <Navbar/>
                </Route>
                <Route exact path={'/posts'}>
                    <PostsList/>
                </Route>
                <Route exact path={'/posts/:id'}>
                    <SinglePost/>
                </Route>
                <Redirect to={'/posts'}/>
            </Switch>
        </div>
    );
}

export default App;
