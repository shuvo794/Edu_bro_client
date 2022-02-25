import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Banner/Banner';


import Blogs from '../Blogs/Blogs';
import Counter from '../Counter/Counter';

import AllBooks from '../../AllBooks/AllBooks';

import Questions from './../Questions/Questions';




const Home = () => {
     return (
          <div>

               <Banner></Banner>
               <Questions></Questions>
               <AllBooks></AllBooks>

               <AllReviews></AllReviews>
               <Blogs></Blogs>
               <Counter />



               {/* <TeamMember></TeamMember> */}

          </div>
     );
};

export default Home;
