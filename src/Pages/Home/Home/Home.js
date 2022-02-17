import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Banner/Banner';

import TeamMember from '../TeamMember/TeamMember';

import Questions from '../Questions/Questions';
import Blogs from '../Blogs/Blogs';


const Home = () => {
     return (
          <div>

               <Banner></Banner>
               <Questions></Questions>
               <AllReviews></AllReviews>
               <Blogs></Blogs>
               {/* <TeamMember></TeamMember> */}
               
          </div>
     );
};

export default Home;
