import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function TransactionNewForm(){
    const[transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: "",
        from: "",
        category: "",
    })

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };
    
    // const handleCheckboxChange = () => {
    //     setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday});
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/transactions`, transaction)
          .then((res)=>{
            navigate("/transactions");
          }).catch((err)=>{
            console.log(err);
          })
    };  
    return(
        <div className="New">
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Transaction Date</label>
            <input
            id="date"
            value={transaction.date}
            type="text"
            onChange={handleTextChange}
            placeholder="date"
            />
            <label htmlFor="name">Name:</label>
            <input
            id="name"
            type="text"
            name="name"
            value={transaction.name}
            placeholder="Name"
            onChange={handleTextChange}
            />
            <label htmlFor="amount">Amount:</label>
            <input
            id="amount"
            type="number"
            value={transaction.amount}
            placeholder="Amount"
            onChange={handleTextChange}
            />
            <label htmlFor="from">From:</label>
            <input
            id="from"
            type="text"
            placeholder="From"
            value={transaction.from}
            onChange={handleTextChange}
            // checked={log.mistakesWereMadeToday}
            />
            <label htmlFor="category">Category:</label>
            <input
            id="category"
            value={transaction.category}
            type="text"
            onChange={handleTextChange}
            placeholder="Category"
            />
            <br />
            <button 
            type="submit">Create New Item</button>
      </form>
    </div>
    )
}

export default TransactionNewForm;