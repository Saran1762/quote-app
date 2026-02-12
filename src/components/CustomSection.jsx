import Projects from "./Projects";

function CustomSection() {
    const skills = ["Java", "HTML", "CSS", "JavaScript", "Reactjs"];

    return (
        <div className="custom">
            <h2>My Technical Skills</h2>
            <div className="skills">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill}
                    </div>
                ))}
            </div>
            <Projects />
        </div>
    );
}

export default CustomSection;