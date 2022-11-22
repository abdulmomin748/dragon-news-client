import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import NewsSummaryCard from '../Shered/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const CategoryNews = useLoaderData();
    useTitle('Category')
    return (
        <div>
           {
                CategoryNews.map(news => <NewsSummaryCard key={news._id} news={news} />)
           }
        </div>
    );
};

export default Category;