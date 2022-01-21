import axios from "axios";
import { useEffect,useState } from "react";
import Transaction from "./Transaction";



function Transactions(){
    const API = process.env.REACT_APP_API_URL;
    const [transactions, setTransactions] = useState([]);
    useEffect(()=>{
        axios.get(API + "/transactions")
            .then((res)=>{
                setTransactions(res.data);
                // console.log(res.data);
            }).catch((err)=>{
                throw err;
            })
    },[]);
    return(
        <div className="Transactions">
            <section>
                        <div>
                            <span>{transactions.date}</span>
                            <span>{transactions.name}</span>
                            <span>{transactions.amount}</span>
                        </div>
                   
                    <div>
                        {transactions.map((transaction, index)=>{
                            return <Transaction key={index} transaction={transaction} index={index}/>
                        })}
                    </div>
                
            </section>
        </div>
    )
}

export default Transactions;
