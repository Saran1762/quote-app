import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import CustomSection from "../components/CustomSection";

function Resultpage() {
    const location = useLocation();
    const data = location.state;

    if (!data) return <h3>No data available</h3>;

    return (
        <>
            <Hero name={data.name} quote={data.quote} />
            <CustomSection />
        </>
    );
}

export default Resultpage;