import React, { useState, useEffect } from 'react';

export default function Form(){
    let [fullName, setFullName] = useState("");
    let handleNameChange =(event)=>{
        setFullName(event.target.value);
    }
    return (
        <form action="">
            <label htmlFor="username">Full Name</label>
            <input placeholder="enter full name" type="text" value={fullName} onChange={handleNameChange} id="username" />
            <button>Submit</button>
            <frame />
        </form>
    )
    
}