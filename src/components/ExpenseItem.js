import React,{useContext} from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../context/AppContext'

export default function ExpenseItem(props) {

  const {dispatch} = useContext(AppContext)

  const handleClick = ()=>{
    dispatch({
      type : 'DELETE_EXPENSE',
      payload : props.id,
    })
  }



  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name} 
        <div>
            <span className='badge bg-primary tag-pill mr-3'>
                ${props.cost}
            </span>
            <TiDelete size = '1.5em' onClick={handleClick}  ></TiDelete>
        </div>
    </li>
  )
}
