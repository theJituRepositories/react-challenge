import React from "react";
import { useState } from "react";

const FormUpdate= () => {
    const [inputValues, setInputValues] = useState('');
    const [items, setItems] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValues.trim() !== "") {
            setItems([...items, inputValues]);
            setInputValues("");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" value={inputValues} onChange={(e) => setInputValues(e.target.value)} placeholder="enter the react value you learnt" />
                <button type="submit">Add Items</button>
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default FormUpdate