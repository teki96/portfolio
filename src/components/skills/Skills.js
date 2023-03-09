import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaJava, FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaGithub, FaWindows, FaLinux} from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiTypescript, SiExpress, SiSpringboot, SiFlutter, SiMysql, SiPostgresql, SiMongodb, SiMacos} from "react-icons/si";
import { TbBrandReactNative } from 'react-icons/tb';
const Skills = () => {

    const programming_languages = [
        {
          id: 1,
          icon: <FaHtml5 className=""></FaHtml5>,
          name: "HTML5",
          level: "90",
          desc: "asd",
        },
        {
          id: 2,
          icon: <FaCss3 className=""></FaCss3>,
          name: "CSS3",
          level: "90",
          desc: "",
        },
        {
          id: 3,
          icon: <SiTailwindcss className=""></SiTailwindcss>,
          name: "TailwindCSS",
          level: "90",
          desc: "",
        },
        {
          id: 4,
          icon: <FaJs className=""></FaJs>,
          name: "JavaScript",
          level: "90",
          desc: "",
        },
        {
          id: 5,
          icon: <FaJava className=""></FaJava>,
          name: "Java",
          level: "75",
          desc: "",
        },
        {
          id: 6,
          icon: <SiCplusplus className=""></SiCplusplus>,
          name: "C++",
          level: "65",
          desc: "",
        },
        {
          id: 7,
          icon: <FaPython className=""></FaPython>,
          name: "Python",
          level: "50",
          desc: "",
        },
        {
          id: 8,
          icon: <SiTypescript className=""></SiTypescript>,
          name: "TypeScript",
          level: "50",
          desc: "",
        },
      ]
    
      const frameworks = [
        {
          id: 1,
          icon: <FaReact className=""></FaReact>,
          name: "React",
          level: "90",
          desc: "",
        },
        {
          id: 2,
          icon: <FaNodeJs className=""></FaNodeJs>,
          name: "Node.js",
          level: "80",
          desc: "",
        },
        {
          id: 3,
          icon: <SiExpress className=""></SiExpress>,
          name: "Express.js",
          level: "80",
          desc: "",
        },
        {
          id: 4,
          icon: <SiSpringboot className=""></SiSpringboot>,
          name: "Spring Boot",
          level: "60",
          desc: "",
        },
        {
          id: 5,
          icon: <TbBrandReactNative className=""></TbBrandReactNative>,
          name: "React Native",
          level: "33",
          desc: "",
        },
        {
          id: 6,
          icon: <SiFlutter className=""></SiFlutter>,
          name: "Flutter",
          level: "33",
          desc: "",
        },
      ]
    
      const databases = [
        {
          id: 1,
          icon: <SiMysql className=""></SiMysql>,
          name: "MySQL",
          level: "80",
          desc: "",
        },
        {
          id: 2,
          icon: <SiPostgresql className=""></SiPostgresql>,
          name: "PostgreSQL",
          level: "70",
          desc: "",
        },
        {
          id: 3,
          icon: <SiMongodb className=""></SiMongodb>,
          name: "MongoDB",
          level: "60",
          desc: "",
        },
      ]

      const other = [
        {
          id: 1,
          icon: <FaGithub className=""></FaGithub>,
          name: "GitHub",
          level: "80",  
        },
        {
          id: 2,
          icon: <FaDocker className=""></FaDocker>,
          name: "Docker",
          level: "70",
          desc: "",
        },
        {
          id: 3,
          icon: <FaAws className=""></FaAws>,
          name: "AWS",
          level: "50",
          desc: "",
        },
      ]

      const platforms = [
        {
          id: 1,
          icon: <FaWindows className=""></FaWindows>,
          name: "Windows",
          level: "95",
          desc: "",
        },
        {
          id: 2,
          icon: <FaLinux className=""></FaLinux>,
          name: "Linux",
          level: "75",
          desc: "",
        },
        {
          id: 3,
          icon: <SiMacos className=""></SiMacos>,
          name: "MacOS",
          level: "40",
          desc: "",
        },
      ]


    return (
        <div>
            <div className="card max-w-md mx-auto bg-base-200 border border-base-300 shadow-xl">
            <div className="card-body">
            <h1 className="text-left pl-2 text-2xl">Ohjelmointi</h1>
            <hr className="h-2"></hr>
            {programming_languages.map((skill) => (
              <div key={skill.id} className="text-left flex items-center">
              {skill.icon}
                <p className="pl-2">{skill.name}</p>
                <progress
                  className="progress progress-secondary w-1/2 bg-base-300 "
                  value={skill.level}
                  max="100"
                ></progress>
              </div>
            )
            )}  
            <h1 className="text-left pl-2 pt-4 text-2xl">Kehykset/Kirjastot</h1>
            <hr className="h-2"></hr>
            {frameworks.map((skill) => (
              <div key={skill.id} className="text-left flex items-center">
              {skill.icon}
                <p className="pl-2">{skill.name}</p>
                <progress
                  className="progress progress-secondary w-1/2 bg-base-300 "
                  value={skill.level}
                  max="100"
                ></progress>
              </div>
            )
            )}
            <h1 className="text-left pl-2 pt-4 text-2xl">Tietokannat</h1>
            <hr className="h-2"></hr>
            {databases.map((skill) => (
              <div key={skill.id} className="text-left flex items-center">
              {skill.icon}
                <p className="pl-2">{skill.name}</p>
                <progress
                  className="progress progress-secondary w-1/2 bg-base-300 "
                  value={skill.level}
                  max="100"
                ></progress>
              </div>
            )
            )}
            <h1 className="text-left pl-2 pt-4 text-2xl">Muut teknologiat/palvelut</h1>
            <hr className="h-2"></hr>
            {other.map((skill) => (
              <div key={skill.id} className="text-left flex items-center">
              {skill.icon}
                <p className="pl-2">{skill.name}</p>
                <progress
                  className="progress progress-secondary w-1/2 bg-base-300 "
                  value={skill.level}
                  max="100"
                ></progress>
              </div>
            )
            )}
            <h1 className="text-left pl-2 pt-4 text-2xl">Alustat</h1>
            <hr className="h-2"></hr>
            {platforms.map((skill) => (
              <div key={skill.id} className="text-left flex items-center">
              {skill.icon}
                <p className="pl-2">{skill.name}</p>
                <progress
                  className="progress progress-secondary w-1/2 bg-base-300 "
                  value={skill.level}
                  max="100"
                ></progress>
              </div>
            )
            )}
            <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
    );
};

export default Skills;