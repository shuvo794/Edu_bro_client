import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Banner/Banner';
import Questions from '../Questions/Questions';

const Home = () => {
     return (
          <div>

               <Banner></Banner>
               <Questions></Questions>
               <AllReviews></AllReviews>
          </div>
     );
};

export default Home;