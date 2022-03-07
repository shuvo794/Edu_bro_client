import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Banner/Banner';
import Questions from '../Questions/Questions';
import Blogs from '../Blogs/Blogs';
import Counter from '../Counter/Counter';
import useFirebase from '../../../hooks/useFirebase';

import AllBooks from '../../AllBooks/AllBooks'






const Home = () => {
     const { handleClick } = useFirebase()
     return (
          <div onClick={handleClick}>

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
