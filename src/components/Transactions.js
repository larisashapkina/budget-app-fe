import axios from "axios";
import { useEffect,useState } from "react";
import Transaction from "./Transaction";
import { Table } from "react-bootstrap";



function Transactions({getTotalAmount}){
    const API = process.env.REACT_APP_API_URL;
    const [transactions, setTransactions] = useState([]);

    useEffect(()=>{
        axios.get(API + "/transactions")
            .then((res)=>{
                setTransactions(res.data);
                getTotalAmount(res.data.map(el=>{
                    return Number(el.amount)
                }).reduce((a, b)=> a+b, 0))
                // console.log(res.data);
            }).catch((err)=>{
                throw err;
            })
    },[]);
    return(
        <div className="Transactions">
            <section>
                <Table>
                        <thead>
                            <tr>
                                <th>Transaction Date:{transactions.date}</th>
                                <th>Transaction Name:{transactions.name}</th>
                                <th>Transaction Amount:{transactions.amount}</th>
                            </tr>
                        </thead>
                   
                    <tbody>
                        {transactions.map((transaction, index)=>{
                            return <Transaction key={index} transaction={transaction} index={index}/>
                        })}
                    </tbody>
                </Table>
            </section>
        </div>
    )
}

export default Transactions;
