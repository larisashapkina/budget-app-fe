import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function TransactionEditForm() {
    let { index } = useParams();
  
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: "",
        from: "",
        category: "",
    });
  
    const navigate = useNavigate();
  
    const handleTextChange = (event) => {
      setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };
  
  
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
        .then((res)=>{
          setTransaction(res.data);
        }).catch((err)=>{
          navigate("/not-found");
        })
    }, [index]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.put(`${process.env.REACT_APP_API_URL}/transactions/${index}`, transaction)
        .then((res)=>{
          navigate(`/transactions/${index}`);
        }).catch((err)=>{
          console.log(err)
        })
    };
    return (
      <div className="Edit">
        <form onSubmit={handleSubmit}>
        <label htmlFor="date">Transaction Date: </label>
            <input
            name="date"
            id="date"
            value={transaction.date}
            type="text"
            onChange={handleTextChange}
            placeholder="Date"
            />
           <label htmlFor="name"> Name: </label>
            <input
            id="name"
            type="text"
            name="name"
            value={transaction.name}
            placeholder="Name"
            onChange={handleTextChange}
            />
            <label htmlFor="amount">Amount: </label>
            <input
            id="amount"
            value={transaction.amount}
            type="text"
            onChange={handleTextChange}
            placeholder="Amount"
            />
            <label htmlFor="from">From: </label>
            <input
            id="from"
            type="text"
            value={transaction.from}
            placeholder = "From"
            onChange={handleTextChange}
            />
            <label htmlFor="category">Category: </label>
            <input
            id="category"
            value={transaction.category}
            type="text"
            onChange={handleTextChange}
            placeholder="Category"
            />
            <br />
          <input type="submit" />
        </form>
        <Link to={`/transactions/${index}`}>
          <button>Back</button>
        </Link>
      </div>
    );
  }
  
  export default TransactionEditForm;