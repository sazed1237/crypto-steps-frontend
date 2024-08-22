import React from 'react';

const FormattedPrice = ({ amount }) => {
    const formattedAmount = new Number(amount).toLocaleString('en-us', {
        style: 'currency',
        currency: "USD",
        minimumFractionDigits: 2,
    })

    return <span>{formattedAmount}</span>
};

export default FormattedPrice;