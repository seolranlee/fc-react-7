import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NewsList from './components/NewsList';
import styled from 'styled-components';

const CategoryBlock = styled.div`
    width: 768px;
    margin: 2rem auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            flex: 1 1 auto;
            text-align: center;
            a {
                display: inline-block;
                padding: 0.5rem 1rem;
                color: #538ae4;
                text-decoration: none;
                border-radius: 5rem;
                background-color: rgba(83, 138, 228, 0.2);
                &:hover {
                    background-color: rgba(83, 138, 228, 0.6);
                    color: #fff;
                    transition: all 0.4s ease-out;
                }
            }
        }
    }
`;

class App extends Component {
    state = {
        categories: [
            'all',
            'business',
            'entertainment',
            'health',
            'science',
            'sports',
            'technology',
        ],
        current: 'all',
    };
    render() {
        return (
            <div>
                <CategoryBlock>
                    <ul>
                        {this.state.categories.map((category, index) => (
                            <li key={index}>
                                <Link to={category === 'all' ? '/' : category}>
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CategoryBlock>
                <Route path="/" exact component={NewsList} />
                <Route path="/:category" component={NewsList} />
            </div>
        );
    }
}

export default App;
