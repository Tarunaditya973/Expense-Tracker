import React, { useState,useContext } from 'react'
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4 } from 'uuid'

export default function AddExpense() {
    const {dispatch} = useContext(AppContext);
    const [name, setName] = useState('');
    const [Cost, setCost] = useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id :uuidv4,
            name : name,
            cost : parseInt(Cost),
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload : expense,
        })

    }
    return (
        <form onSubmit={onSubmit}  >
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor='name'>Name</label>
                    <input
                        required='required'
                        type="text"
                        className="form-control"
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className="col-sm">
                    <label htmlFor="cost"> Cost </label>
                    <input
                        type="text"
                        required='required'
                        id='cost'
                        className='form-control'
                        value={Cost}
                        onChange={(event) => setCost(event.target.value)}
                    >
                    </input>
                </div>
                <div className="col-sm">
                    <button type='submit' className='btn btn-primary mt-4'>Save</button>
                </div>
            </div>
        </form>
    )
}
