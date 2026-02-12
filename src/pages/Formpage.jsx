import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formpage() {
    const [name, setName] = useState("");
    const [quote, setQuote] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !quote.trim()) {
            setError("All fields required");
            return;
        }
        navigate("/result", { state: { name, quote } });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Enter Quote</h2>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Quote"
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Formpage;
