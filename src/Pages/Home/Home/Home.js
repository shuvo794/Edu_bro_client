import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Banner/Banner';
import TeamMember from '../TeamMember/TeamMember';
import Questions from '../Questions/Questions';
import Blogs from '../Blogs/Blogs';
import Counter from '../Counter/Counter';
import AllBooks from '../../AllBooks/AllBooks';


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
