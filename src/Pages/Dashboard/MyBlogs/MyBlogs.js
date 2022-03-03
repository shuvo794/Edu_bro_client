import React from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const MyBlogs = () => {
    return (
    //     < div className="container all-order-container" >
    //     <div className="text-center pb-3">
    //         <h1 className="mb-5 text-center pt-5">Total Blogs <span className="text-danger">{orders.length}</span>  </h1>
    //     </div>

    //     <table className="table table-dark" style={{ width: "100%" }}>
    //         <thead  >
    //             <tr className="bg-dark text-white mb-3 p-2" style={{ border: "1px solid red" }}>

    //                 <th >Number</th>
    //                 <th >Place</th>
    //                 <th >Location</th>
    //                 <th >Image</th>
    //                 <th >Price</th>
    //                 <th >Transportation</th>
    //                 <th >Status</th>
    //                 <th >Update</th>
    //             </tr>
    //         </thead>
    //         {orders?.map((order, index) => (
    //             <tbody key={order._id}>
    //                 <tr role="row" style={{ border: "2px solid gray" }} >
    //                     <th scope="row">{index + 1}</th>
    //                     <td>{order.place}</td>
    //                     <td>{order.location}</td>
    //                     <td><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td>
    //                     <td>{order.price}</td>
    //                     <td>{order.transportation}</td>
    //                     <td>
    //                         <div >
    //                             <select onChange={handleSelectValue} className="pending p-2 ">
    //                                 <option defaultValue={order.status}>{order.status}</option>
    //                                 <option defaultValue="approved">Approved</option>
    //                                 <option defaultValue="pending">Pending</option>
    //                                 <option defaultValue="cancelled">Cancelled</option>
    //                             </select>
    //                         </div>
    //                     </td>
        
    //                 </tr>
    //             </tbody>

    //         ))}
    //     </table>
    // </div >

    );
};

export default MyBlogs;