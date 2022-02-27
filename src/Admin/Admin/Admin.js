import React, { useState } from 'react';


import './Admin.css'


const Admin = () => {
    const [active, setActive] = useState('all Question')


    return (
        <div className="row admin ">
            <div className="d-flex flex-column flex-shrink-0 bg-dark  vh-100 col-md-1 col-3">
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-white text-center">



                    <li className="nav-link py-3 border-bottom text-white " onClick={() => setActive('all Question')}><i class="fas fa-blog"></i><small>all Question</small> </li>

                    <li className="nav-link py-3 border-bottom text-white " onClick={() => setActive('make admin')}> <i className="fas fa-users-cog"></i> <small>Make Admin</small> </li>


                    <li className="nav-link py-3 border-bottom text-white " onClick={() => setActive('add service to DB')}> <i className="fa fa-first-order" ></i> <small>Add Question</small></li>
                    <li className="nav-link py-3 border-bottom text-white " onClick={() => setActive('Remove Question')}> <i class="fas fa-trash-alt"></i> <small>Remove Question</small> </li>

                </ul>
            </div>
            <div className="col-md-11 col-9 bg-dark" >
                {
                    (active === 'all Question' && <AllOrders></AllOrders>) ||
                    (active === 'add service to DB' && <AddToDatabase></AddToDatabase>) ||
                    (active === 'make admin' && <AddAdmin></AddAdmin>) ||
                    (active === 'Remove Question' && <RemoveServices></RemoveServices>)
                }
            </div>
        </div>
    );
};

export default Admin;