import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Banner/Banner';
import TeamMember from '../TeamMember/TeamMember';
import Questions from '../Questions/Questions';
import Blogs from '../Blogs/Blogs';
import Counter from '../Counter/Counter';
import useFirebase from '../../../hooks/useFirebase';


const Home = () => {
     const { handleClick } = useFirebase()
     return (
          <div onClick={handleClick}>

               <Banner></Banner>
               <Questions></Questions>
               <AllReviews></AllReviews>
               <Blogs></Blogs>
               <Counter />



               {/* <TeamMember></TeamMember> */}

          </div>
     );
};

export default Home;
