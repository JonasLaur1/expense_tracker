import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

    useEffect(() => {
        setFilteredExpenses(expenses);
    }, [expenses]);

    const handleChange = (event) => {
        const searchResults = expenses.filter(expense =>
            expense.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredExpenses(searchResults);
    };

    return (
        <>
            <input
                type='text'
                className='form-control mb-2'
                placeholder='Type to search...'
                onChange={handleChange}
            />
            <ul className='list-group'>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </ul>
        </>
    );
};

export default ExpenseList;
