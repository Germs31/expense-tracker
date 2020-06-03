import React from 'react'

const Transaction = ({transaction}) => {
    return (
        <div>
            <li className="minus">
                {transaction.amount} <span>-$400</span><button className="delete-btn">X</button>
            </li>
        </div>
    )
}

export default Transaction;
