import React, { useState } from 'react';

function Input() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`the name you entered was : ${name}`)
    }

    return (
        <form>
            <label>Enter your name: <br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <br />
        </form>
    );
}

export default Input;