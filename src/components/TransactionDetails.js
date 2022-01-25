import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function TransactionDetails(){
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
      .then((res)=>{
        setTransaction(res.data);
      }).catch(()=>{
        navigate("/not-found");
      });
    }, [index]);

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
          .then((res)=>{
            navigate("/transactions");
          }).catch((err)=>{
            console.log(err);
          })
      };
    return(
        <article>
            <div>Date: {transaction.date}</div>
            <div>Name: {transaction.name}</div>
            <div>Amount: {transaction.amount}</div>
            <div>From: {transaction.from}</div>
            <div>Category: {transaction.category}</div>
            <div className="showNavigation">
                <div>
                {" "}
                <Link to={`/transactions`}>
                    <button>Back</button>
                </Link>
                </div>
                <div>
                {" "}
                <Link to={`/transactions/${index}/edit`}>
                    <button>Edit</button>
                </Link>
                </div>
                <div>
                {" "}
                <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    )
}

export default TransactionDetails;