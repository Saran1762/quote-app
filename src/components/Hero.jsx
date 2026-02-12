function Hero({ name, quote }) {
    return (
        <div className="hero">
            <h1>Welcome, {name}</h1>
            <p>{quote}</p>
        </div>
    );
}

export default Hero;