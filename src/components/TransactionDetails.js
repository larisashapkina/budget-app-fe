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
            <h3>
                Date: {transaction.date}
            </h3>
            <h5>
                <div> Name: {transaction.name}</div>
            </h5>
            <p>Amount: {transaction.amount}</p>
            <p>From: {transaction.from}</p>
            <p>Category: {transaction.category}</p>
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