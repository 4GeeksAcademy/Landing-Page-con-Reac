import React from "react";

const Cards = (props) => {
    return(
        <div className="card mt-5 mx-3 pt-5" style={{width: "500px", height: "500px"}}>
  <img src="500x325" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipsicing elit. Ipsa, ipsam, eligendi, in quo sunt pssimus non incidunt odit vero asiquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repllat</p>
    <a href="#" className="btn btn-primary text-center">Find out moore</a>
  </div>
</div>
    )

    

}

export {Cards}