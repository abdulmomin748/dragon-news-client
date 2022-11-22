import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import NewsSummaryCard from '../Shered/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    useTitle('Home')
    return (
        <div>
            {
                allNews.map(news => <NewsSummaryCard news = {news} key={news._id} />)
            }
        </div>
    );
};

export default Home;