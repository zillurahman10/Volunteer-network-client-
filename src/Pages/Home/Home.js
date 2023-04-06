import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from './Banner';
import Introduction from './Introduction'
import Questions from './Questions';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <Questions></Questions>
        </div>
    );
};

export default Home;