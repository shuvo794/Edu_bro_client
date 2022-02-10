import React from 'react';

const Cart = ({ data }) => {
    const { url, subject, year } = data


    console.log(url)

    let googleId = url.slice(32, 65);
    console.log(googleId)
    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`


    return (
        <div className="col">
            <div className="card custom-cart h-100 hover">
                <iframe title="question" src={viewUrl}
                    className="img-fluid rounded-start w-100 " style={{ height: "500px" }} allow="autoplay"></iframe>
                <div className="card-body">
                    <h5 className="card-title">Subject Name: {subject}</h5>
                    <h5 className="card-title">Subject Code: {subject}</h5>
                    <h5 className="card-title">Semester: {subject}</h5>
                    <p className="card-text">Year: {year}</p>
                    <div className="btn btn-danger" ><a href={download}>Download</a></div>
                    <div className="btn btn-danger" ><a href={viewUrl}>Download</a></div>
                </div>
            </div>
        </div>
    );
};

export default Cart;