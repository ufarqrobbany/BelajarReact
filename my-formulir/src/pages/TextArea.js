import { useState } from "react";

function TextArea() {
    const [textarea, setTextarea] = useState("ini content sementara");

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    return (
        <form>
            <label>Enter your feedback: <br />
                <textarea value={textarea} onChange={handleChange} />
            </label>
            <br />
            <br />
        </form>
    );
}

export default TextArea;