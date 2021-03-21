import React from 'react';




const Category = (props) => {
    // const { id, name } = props.ticket;
    const { name, id, image } = props.categoryItem;
    const handleViewDetails = props.viewDetailsBtn;



    return (
        <div className="col-md-3">
            <div className="card text-center">
            <img src={image} class="card-img-top mx-auto p-3" alt="train" style={{width: "50%"}} />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <br/>

                    <button onClick={() => handleViewDetails(id)} className="btn btn-primary">View Destination</button>

                </div>
            </div>
        </div>
    );
};

export default Category;