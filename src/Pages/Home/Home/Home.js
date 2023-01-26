import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Banner/Banner';
// import Questions from '../Questions/Questions';
import Blogs from '../Blogs/Blogs';
import Counter from '../Counter/Counter';
import useFirebase from "../../../hooks/useFirebase";
import Services from "../Services/Services";
import "../TeamMember/TeamMember.css";

const Home = () => {
  const { handleClick } = useFirebase();
  return (
    <div onClick={handleClick}>
      <Banner></Banner>
      <Services />
      {/* <Questions></Questions> */}
      <AllReviews></AllReviews>
      <Blogs></Blogs>
      <Counter />
      {/* <Reviews /> */}

      {/* <TeamMember></TeamMember> */}
    </div>
  );
};

export default Home;
