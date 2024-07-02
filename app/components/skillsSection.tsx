const Skills = () => {
    return ( 
        <section className="flex justify-evenly shimmerBackground  hover:glassContainer border-2 border-transparent rounded-xl">
        <div className="flex flex-row justify-evenly">
          <div className="px-4">
            <h2 className="text-2xl font-bold my-4">Technical Skills</h2>
            <ul className="text-lg">
              <li>
                {" "}
                <span className="font-bold">Languages:</span> JavaScript,
                TypeScript using Node.js and browsers as an environment
              </li>
              <li>
                {" "}
                <span className="font-bold">Methodologies:</span> Object
                Oriented Programming (OOP), Model View Controller (MVC){" "}
              </li>
              <li>
                {" "}
                <span className="font-bold">Testing:</span> Test Driven
                Development (TDD), Jest, Supertest
              </li>
              <li>
                {" "}
                <span className="font-bold">Back-End:</span> Express.js, SQL,
                Postgres SQL, Firebase
              </li>
              <li>
                {" "}
                <span className="font-bold">Front-End:</span> HTML, CSS,
                React, React Native, Axios, accessibility tools such as
                Lighthouse, Expo, NextJS
              </li>
              <li>
                {" "}
                <span className="font-bold">Other:</span> Paired programming,
                technical communication, Regex, Agile and SCRUM methodologies
              </li>
            </ul>
          </div>

          <div className="px-4">
            <h2 className="text-2xl font-bold my-4">Skills And Expertise</h2>
            <ul className="text-lg">
              <li>Japanese Language</li>
              <li>Project Management</li>
              <li>Learning quickly under high pressure</li>
              <li>Communication skills</li>
              <li>Working efficiently in a team</li>
            </ul>
          </div>
        </div>
      </section>
     );
}
 
export default Skills;