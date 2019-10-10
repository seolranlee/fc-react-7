import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import Cateogries from './Cateogries';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

class NewsList extends Component {
    state = {
        loading: false,
        articles: null,
        current: 'all'
    };

    handleClick = idx => {
        this.setState({
            current: this.state.categories[idx],
        });
    };

    loadData = async url => {
        try {
            this.setState({
                loading: true,
            });
            if (url) {
                var response = await axios.get(
                    `/top-headlines?country=kr&category=${url}&apiKey=a2acaace6df64c40b5cd4bc851eda27e`,
                );
            } else {
                var response = await axios.get(
                    '/top-headlines?country=kr&apiKey=a2acaace6df64c40b5cd4bc851eda27e',
                );
            }

            this.setState({
                articles: response.data.articles,
            });
        } catch (e) {
            console.log(e);
        }
        this.setState({
            loading: false,
        });
    };

    componentDidMount() {
        const { category } = this.props.match.params;
        this.loadData(category);
    }

    componentDidUpdate(prevProps, prevState) {
        const { category } = this.props.match.params;
        if (prevProps.match.params.category !== category)
            this.loadData(category);
    }

    render() {
        const { category } = this.props.match.params;
        if (this.state.loading || this.state.articles === null) {
            return <NewsListBlock>로딩중....</NewsListBlock>;
        }
        return (
            <div>
                <Cateogries category={category}/>
                <NewsListBlock>
                    {this.state.articles.map(article => (
                        <NewsItem article={article} key={article.url} />
                    ))}
                </NewsListBlock>
            </div>
        );
    }
}

export default NewsList;
