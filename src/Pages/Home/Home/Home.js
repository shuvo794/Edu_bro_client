import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Banner/Banner';
import TeamMember from '../TeamMember/TeamMember';

const Home = () => {
     return (
          <div>

               <Banner></Banner>
               <AllReviews></AllReviews>
               <TeamMember></TeamMember>
          </div>
     );
};

export default Home;