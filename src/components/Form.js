// importing react and use state hook.
import React, { useState } from "react";

// setting up a function to update the form contents array based on the input of the form.
function Form({ onSubmit }) {
    // setting up the state of the form contents.
    const [formContent, setFormContents] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    });
// coming up with a handleChange function that handles the onChange of each input field and updates the formContent arrays based on the setFormContents.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormContents({ ...formContent, [name]: value });
    };

    // coming up with a handleSubmit function that handles the onSubmit of the form and updates the formContent arrays based on the setFormContents which activates once an input field is fully filled.
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formContent);
        setFormContents({
            date: "",
            description: "",
            category: "",
            amount: ""
        });
    };
// returning forms with 4 inputs whose names are set to their value type. Each input field also has an onChange attribute which refers the handleChange function.
    return (
        <form className="form" onSubmit={handleSubmit}>
           <strong>Date:</strong> <input
                type="date"
                name="date"
                value={formContent.date}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                value={formContent.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                type="text"
                name="category"
                value={formContent.category}
                onChange={handleChange}
                placeholder="Category"
            />
            <input
                type="text"
                name="amount"
                value={formContent.amount}
                onChange={handleChange}
                placeholder="Amount"
            /><br/>
            <button className="button" type="submit">Add Transaction</button>
        </form>
    );
}

export default Form;