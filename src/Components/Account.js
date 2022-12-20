import "./Account.css";
import React, { useState, useRef, useEffect } from "react";
import FormatAmt from "./FormatAmt";

const Account = () => {

  const banks = [
    { label: "0", value: "SBI", debit: 50, credit: 100 },
    { label: "1", value: "UBI", debit: 500, credit: 10 },
    { label: "2", value: "UCO", debit: 100, credit: 1000 },
  ];

  let [inputList, setInputList] = useState([
    { bank: "Select Account", debit: 0, credit: 0 },
    { bank: "Select Account", debit: 0, credit: 0 },
    { bank: "Select Account", debit: 0, credit: 0 },
  ]);

  let handleBankChange = (e, index) => {
    let tar = e.target.value;
    let { deb, cred } = [0, 0];
    banks.forEach((element) => {
      if (element.value === tar) {
        deb = element.debit;
        cred = element.credit;
      }
    });
    let list = [...inputList];
    list[index].bank = tar;
    list[index].debit = deb;
    list[index].credit = cred;
    setInputList(list);
  };

  const handleChange = (e, index) => {
    const list = [...inputList];
    list[index][e.target.name] = e.target.value;
    setInputList(list);
  };

  let debit_amt = 0;
  let cred_amt = 0;

  const handleClick = () => {
    setInputList([...inputList, { bank: "Select Account", debit: 0, credit: 0 }]);
  };

  const handleRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  return (
    <div>
      {inputList.map((x, i) => {
        debit_amt += parseFloat(x.debit);
        cred_amt += parseFloat(x.credit);
        return (
          <div className="container text-center" key={i}>
            <div className="row">
              <div className="col-5 border rounded d-flex flex-row align-items-center">
                <select
                  className={`${inputList[i].bank==='Select Account'?'text-muted':''} w-100 border-0 h4 element-focus`}
                  defaultValue={"Select Account"}
                  onChange={(e) => handleBankChange(e, i)}
                >
                  <option value="Select Account" disabled>
                    Select Account
                  </option>
                  {banks.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.value} 
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-3 border rounded d-flex flex-row align-items-center">
                <input
                  type="text"
                  className="w-100 h5 border-0 element-focus"
                  name="debit"
                  id="debit"
                  value={inputList[i].debit}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
              <div className="col-3 border rounded d-flex flex-row align-items-center">
                <input
                  type="text"
                  className="w-100 h5 border-0 element-focus"
                  name="credit"
                  id="credit"
                  value={inputList[i].credit}
                                 
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
              <div className="col d-flex flex-row align-items-center">
                <i
                  className="fa-solid fa-trash"
                  onClick={() => handleRemove(i)}
                ></i>
              </div>
            </div>
          </div>
        );
      })}

      <div className="container text-center">
        <div className="row">
          <div className="col-5">
            <div className="row">
              <div className="col d-flex justify-content-start">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <h5>+Add Row</h5>
                </button>
              </div>
              <div className="col h4 d-flex justify-content-end">Total</div>
            </div>
          </div>
          <div className="col-3 h4">{<FormatAmt amt={debit_amt} />}</div>
          <div className="col-3 h4">{<FormatAmt amt={cred_amt} />}</div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Account;
