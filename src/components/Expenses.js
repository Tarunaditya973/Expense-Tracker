import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext'
export default function Expenses() {
  const {expenses} = useContext(AppContext)
  const spentSoFar = expenses.reduce((total,item)=>{
    return total =total + item.cost;
  },0)

  return (
    <div className='alert alert-primary'>
        <span>spent so far : ${spentSoFar}</span>
    </div>
  )
}
