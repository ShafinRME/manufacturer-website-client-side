import React from 'react';
import Banner from './Banner';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <Summary></Summary>
        </div>
    );
};

export default Home;