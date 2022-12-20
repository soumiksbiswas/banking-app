import React from 'react'

const FormatAmt = ({amt}) => {
    if(isNaN(amt))
        return "0.00";
    else{
  return Intl.NumberFormat("en-IN",{
        maximumFractionDigits:2,
        minimumFractionDigits:2
    }).format(amt);
}
}

export default FormatAmt
