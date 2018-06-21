import React, { Component } from 'react';
import Posts from '../Posts/Posts'
import NewPost from '../NewPost/NewPost'
import FullPost from '../FullPost/FullPost'
import {Route, NavLink} from 'react-router-dom';

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div>
                <header>
                    <nav className='Blog'>
                        <ul>
                            <li><NavLink
                                exact
                                to={'/'}
                                activeClassName={"my-active"}
                                activeStyle={
                                    {
                                        color: '#fa953f',
                                        textDecoration: 'underline'
                                    }
                                }
                            >
                                Home
                            </NavLink></li>
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
                <Route path={'/'} exact component={Posts} />
                <Route path={'/new_post'} exact component={NewPost} />
                <Route path={'/:postId'} exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;