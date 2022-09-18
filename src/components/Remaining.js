import React , {useContext} from 'react'
import { AppContext } from '../context/AppContext';

export default function Remaining() {
    const {expenses,budget} = useContext(AppContext);

    const total_Expenses = expenses.reduce((total,item)=>{
        return (total = total + item.cost);
    },0)

    const alertType = total_Expenses > budget ? 'alert-danger' : 'alert-success';


    return (
        <div className={`alert ${alertType}`}>
            <span> Remaining:${budget-total_Expenses}</span>
        </div>
    );
};
