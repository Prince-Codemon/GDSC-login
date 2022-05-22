import './ExpenseItem.css'
import Card from '../UI/Card'
import React, {useState } from 'react'
import ExpenseDate from './ExpenseDate'

const ExpenseItem=(props)=>{

   const [newTitle, setNewTitle ] = useState(" ")
   const [title, setTitle ] = useState(props.title)
   
    const clickHandler = ()=>{
       setTitle('New Title')
    }
    
return (

    <Card className='expense-item'>
    <ExpenseDate date={props.date} amount={props.amount} title={props.title}/>
    <div className='expense-item_description'>
        <h2>{title} </h2>
        <div className='expense-item_price'>${props.amount}</div>
    </div>
    <input type="text" name="" id="" value={newTitle} />
    <button onClick={clickHandler}>Change Title</button>
    </Card>
)
}
export default ExpenseItem