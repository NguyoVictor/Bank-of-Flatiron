//importing all the necessary components and hooks.
import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";


//coming up with an App function.
function App() {
    //setting up the useState hook for payments and searchWord.
    const [payments, setPayments] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    //setting up the useState hook for formContent via a function addPayment. This updates the 
    const addPayment = (formContent) => {
        setPayments([...payments, formContent]);
    };

    //setting up the a filterPayment variable that stores filtered payments that match the characters of the searchWord variable. This value will determine whats shown by the table.
    const filteredPayments = payments.filter((payment) =>
        payment.description.toLowerCase().includes(searchWord.toLowerCase())
    );
 console.log(filteredPayments);
    // returning htmls elements from various components.
    return (
        <div className="App">
            <header>
                <h1>The Royal Bank of Flatiron</h1>
            </header>
            <SearchBar onChange={setSearchWord} />
            <Form onSubmit={addPayment} />
            <Table payments={filteredPayments} />
        </div>
    );
}

export default App;
