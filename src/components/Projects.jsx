function Projects() {
    const projects = [
        {
            name: "Deupload",
            description: "Deupload is a simple webpage using html,bootstrap css",
            link: "https://saran1762.github.io/Deupload/"
        },
        {
            name: "GitHub Finder",
            description: "GitHub Finder is a lightweight web application that allows users to search for GitHub profiles and view key details like profile information, repositories, and followers. Using GitHub's API",
            link: "https://saran1762.github.io/Github-Finder/"
        },
    ];
    return (
        <div>
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((p, index) => (
                    <div key={index} className="project-card">
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                        <a href={p.link} target="_blank">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;