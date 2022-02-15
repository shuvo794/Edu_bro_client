import React from 'react';

const QuestionCart = ({ data }) => {
    const { url, subject, year, semester, code } = data

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

            </div>
        </div>
    );
};

export default QuestionCart;