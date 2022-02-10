import React from "react";
import AllReviews from "../AllReviews/AllReviews";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";

import Questions from "../Questions/Questions";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Questions></Questions>
      <AllReviews></AllReviews>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
