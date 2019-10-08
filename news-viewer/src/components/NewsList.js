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

    loadData = async () => {
        try {
            this.setState({
                loading: true,
            });
            const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f',
            );
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
