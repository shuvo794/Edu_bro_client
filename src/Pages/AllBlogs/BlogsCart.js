import React from 'react';

const BlogsCart = ({data}) => {
    
    const { topic, blog,yserName, email } = data

    // let googleId = driveLink?.slice(32, 65);
    // console.log(driveLink)

    // const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    // const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`
    return (
        <div className="col">
        <div className="card custom-cart h-100 hover">
            <div className="card-body">
                <h5 className="card-title"><b>Book Name:</b> {topic}</h5>
                <h5 className="card-title"><b>Writer Name:</b> {yserName}</h5>
                <h5 className="card-title"><b>Email:</b> {email}</h5>
             <p> {blog}</p>
                {/* <div className="d-flex justify-content-around pt-5" >
                    <div className="btn btn-success me-5 " ><a href={download} className="">Download</a></div>
                    <div className="btn btn-danger ms-5" ><a href={viewUrl} className="">Show</a></div>
                </div> */}
            </div>
        </div>
    </div>
    );
};

export default BlogsCart;