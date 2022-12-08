import { useState } from 'react';

function DropDown() {
    const [myName, setMyName] = useState("Umar");

    const handleChange = (event) => {
        setMyName(event.target.value)
    }

    return (
        <form>
            <label>Choose your middle name:<br />
                <select value={myName} onChange={handleChange}>
                    <option value="Umar">Umar</option>
                    <option value="Faruq">Faruq</option>
                    <option value="Robbany">Robbany</option>
                </select>
            </label>
        </form>
    );
}

export default DropDown;