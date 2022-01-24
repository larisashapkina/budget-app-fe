import Transactions from "../components/Transactions";
import { useState } from 'react';

function Index(){
    const [ totalAmount, setTotalAmount] = useState("");

   const getTotalAmount = total=>{
       setTotalAmount(total)
   }

    return(
        <div className="Index">
            <h2>Bank Account Total: ${totalAmount} </h2>
            <Transactions getTotalAmount={getTotalAmount}/> 
        </div>
    )
}

export default Index;
