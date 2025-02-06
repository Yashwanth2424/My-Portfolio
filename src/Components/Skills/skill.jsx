import "./skill.css"

const projects = [
      { title: "Flipkart Clone", description: "A fully responsive e-commerce website.", link: "#" },
      { title: "Portfolio Website", description: "A personal portfolio built with React.", link: "#" }
    ];
    
    const Skills = () => {
      return (
        <section id="skills" className="Project-section">
          <div className="Peoject-section-inner-container">
            <div className="Skills-section">
            <h2 className="Project-inner-container-heading">Skills</h2>
            <div className="progress-container">
              <label>Javascript</label>
              <progress id="project" max={100} value={85}className="progress">85%</progress>
              <label>Python</label>
              <progress id="project" max={100} value={80}className="progress">80%</progress>
              <label>Node Js</label>
              <progress id="project" max={100} value={50}className="progress">50%</progress>
              <label>MySql</label>
              <progress id="project" max={100} value={60}className="progress">60%</progress>
            </div>

            </div>
              
            <div className="Certificates-container">
              <h2 className="Project-inner-container-heading">Certificates</h2>
              <ul className="certificates-list">
                  <li>Build Your Own Static Website Certificate by NXTWave</li>
                  <li>Build Your Own Responsive Website Certificate by NXTWave</li>
                  <li>Programming Foundations with Python Certificate by NXTWave</li>
                  <li>Build Your Own Dynamic Web Application Certificate by NXTWave</li>
                  <li>JIGNASA State level Student Study Project Participation Certificate 2022-23</li>
                  <li>JIGNASA State level Student Study Project Participation Certificate 2023-24</li>
                </ul>
            </div>
             
          </div>
        </section>
      );
    };
    
    export default Skills;














    // <div className="grid md:grid-cols-2 gap-6 mt-6">
    //           {projects.map((project, index) => (
    //             <div key={index} className="p-4 shadow-md rounded-lg bg-white">
    //               <h3 className="text-xl font-bold">{project.title}</h3>
    //               <p className="text-gray-600">{project.description}</p>
    //               <a href={project.link} className="text-blue-500 mt-2 block">View Project →</a>
    //             </div>
    //           ))}
    //         </div>