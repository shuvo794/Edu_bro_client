import React from 'react';
import Saikat from '../../../Assets/Images/TeamMember/Saikat.png'
const TeamMember = () => {
    return (
        <div>
             <h1 data-text="User Reviews" className="text-center my-3 user-reviews">Team Member</h1>
           <section>
               <div className="container">
                   <div className="row ">
                       <div className="col-md-3 card ">
<img src={Saikat} className="w-100 rounded px-0" height="300"alt="" />
<h3 className="text-center my-1 text-primary">Mehedi Hasan Saikat</h3>
<h4 className="text-center my-1 text-success"> Team Leader</h4>
<h4  className="text-center my-1">MERN Stack Developer</h4>
                       </div>


                       <div className="col-md-3"></div>
                       <div className="col-md-3"></div>
                   </div>
                   </div></section> 
        </div>
    );
};

export default TeamMember;