import React, {useContext, useState} from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from 'uuid';

const AddExpense = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const {dispatch} = useContext(AppContext);

    const onSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };


        dispatch({payload:expense , type: 'ADD_EXPENSE'});

    }


    return(
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required="required"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
            </div>
            <div className="col-sm">
                <label for="cost">Cost</label>
                <input
                    type="text"
                    className="form-control"
                    id="cost"
                    required="required"
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                />
            </div>
            <div className="col-sm mt-2" >
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </form>
    )
}

export default AddExpense;
