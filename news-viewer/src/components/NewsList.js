import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';

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
                console.log(url);
                var response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr&category=${url}&apiKey=a2acaace6df64c40b5cd4bc851eda27e`,
                );
            } else {
                var response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=a2acaace6df64c40b5cd4bc851eda27e',
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
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        const { category } = this.props.match.params;

        if (prevProps.match.params.category !== category)
            // this.loadData(this.state.current);
            this.loadData(category);
        // alert('category change');
    }

    render() {
        if (this.state.loading || this.state.articles === null) {
            return <NewsListBlock>로딩중....</NewsListBlock>;
        }
        return (
            <NewsListBlock>
                {this.state.articles.map(article => (
                    <NewsItem article={article} key={article.url} />
                ))}
            </NewsListBlock>
        );
    }
}

export default NewsList;
