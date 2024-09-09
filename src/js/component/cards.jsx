import React from "react";

const Cards = (props) => {
    return(
        <div className="card mt-5 mx-3 pt-5" style={{width: "18rem"}}>
  <img src={props.image} className="card-img-top" alt="Card image"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="#" className="btn btn-primary text-center">Find out moore</a>
  </div>
</div>
    )

    

}

export {Cards}