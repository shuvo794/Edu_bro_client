import React from 'react';

const BooksCart = ({ data }) => {


    const { author, bookName, driveLink, edition, subject, year } = data

    let googleId = driveLink?.slice(32, 65);
    console.log(driveLink)

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`
    return (
        <div className="col">
        <div className="card custom-cart h-100 hover">
            <iframe title="question" src={viewUrl}
                className="img-fluid rounded-start w-100 " style={{ height: "500px" }} allow="autoplay"></iframe>
            <div className="card-body">
                <h5 className="card-title"><b>Book Name:</b> {bookName}</h5>
                <h5 className="card-title"><b>Author:</b> {author}</h5>
                <h5 className="card-title"><b>Subject:</b> {subject}</h5>
                <h5 className="card-title"><b>Edition:</b> {edition}</h5>
                <h5 className="card-text "><b>Year:</b> {year}</h5>
                <div className="d-flex justify-content-around pt-5" >
                    <div className="btn btn-success me-5 " ><a href={download} className="">Download</a></div>
                    <div className="btn btn-danger ms-5" ><a href={viewUrl} className="">Show</a></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BooksCart;