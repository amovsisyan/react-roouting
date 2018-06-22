import React, {Component} from 'react';
import Posts from '../Posts/Posts'
import FullPost from '../FullPost/FullPost'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import './Blog.css';

// import NewPost from '../NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent'
const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');
});


class Blog extends Component {
    state = {
        auth: true
    };

    render() {
        return (
            <div>
                <header>
                    <nav className='Blog'>
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to={'/posts'}
                                    activeClassName={"my-active"}
                                    activeStyle={
                                        {
                                            color: '#fa953f',
                                            textDecoration: 'underline'
                                        }
                                    }
                                >
                                    Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    exact
                                    to={{
                                        pathname: '/new_post',
                                        hash: '#submit',
                                        search: '?something=something'
                                    }}
                                >
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path={'/new_post'} exact component={AsyncNewPost}/> : null}
                    <Route path={'/posts'} exact component={Posts}/>
                    <Route path={'/posts/:postId'} exact component={FullPost}/>
                    {/*<Redirect from={'/'} to={'/posts'}/>*/}
                    <Route render={() => <h1>Eheeeeeeee</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;