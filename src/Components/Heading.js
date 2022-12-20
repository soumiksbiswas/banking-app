import React from "react";

const Heading = () => {
  return (
    <div className="mt-5 mb-2">
      <div className="container text-center">
        <div className="row">
          <div className="col-5 border rounded" style={{backgroundColor:'#bdb9b9'}}>
            <h2>Accounts</h2>
          </div>
          <div className="col-3 border rounded" style={{backgroundColor:'#bdb9b9'}}>
            <h2>Debit Amount</h2>
          </div>
          <div className="col-3 border rounded" style={{backgroundColor:'#bdb9b9'}}>
            <h2>Credit Amount</h2>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
