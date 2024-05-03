// importing the necessary components and creating a function Table that comes up with a table based on the values of the payments variable.
// the tabledata is updated once the add button is clicked.
import React from "react";

function Table({ payments }) {
    if(payments){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
{/* {updating the table body based on the prop payments} */}
                    {payments.map((payment, index) => (
                        <tr key={index}>
                            <td>{payment.date}</td>
                            <td>{payment.description}</td>
                            <td>{payment.category}</td>
                            <td>{payment.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    } else {
   return (
    alert("null!")
   )
}
    }

export default Table;