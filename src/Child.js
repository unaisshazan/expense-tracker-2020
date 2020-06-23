import React, { useContext, useState } from 'react';
import { TransactionContext } from './TransContext';
import Button from '@material-ui/core/Button';
import Background from  "./1.jpg"
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';



function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);


    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });

        setDesc('');
        setAmount(0)
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="container" style={{ backgroundImage: "url(" + Background + ")"}}>
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> ${getIncome() + getExpense()}</h3>

            <div className="expense-container">
                <h3>INCOME <br /> ${getIncome()}</h3>
                <h3>EXPENSE <br /> ${getExpense()}</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="trnsaction-list">
                {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                    )
                })}

            </ul>

            <h3>Add New Transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type="text"
                        value={newDesc}
                        placeholder="Description"
                        onChange={(ev) => setDesc(ev.target.value)}
                        required />
                </label>

                <br />
                <label>
                    Enter Amount <br />
                    <input type="number"
                        value={newAmount}
                        placeholder="Amount"
                        onChange={(ev) => setAmount(ev.target.value)}
                        required />
                </label>
                <br />
                <Button type= "submit" variant="contained" color="secondary" >
                   Add Transection
                  </Button>
                
            </form>
            <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/unais-ali-a88245176')}>
            <LinkedInIcon color="primary"  fontSize="large" />
          </IconButton>
          <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://github.com/unaisshazan')}>
             <GitHubIcon fontSize="large" />
          </IconButton>
         <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.facebook.com/shazanunais')}>
          <FacebookIcon color="primary" fontSize="large" />
       </IconButton>
        </div>
        
    );
}

export default Child;
