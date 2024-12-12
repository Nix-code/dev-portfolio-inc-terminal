
import { ProjectContainer, ProjectItemContainer } from '../../assets/styles/projects/projects';
import { ExperienceTitle } from '../../assets/styles/experience/Experience';

import EngineeringIcon from '@mui/icons-material/Engineering';
import ProjectLists from './ProjectLists';
import jobleetImage from '../../assets/images/jobleet.png'
import brokerImage from '../../assets/images/broker.png';
import di from "../../assets/images/di.png";
interface Props {
  title: string
}

const projects = [
  {
    src: jobleetImage,
    header: "JobLeet (Smart Recruitment Agency SAAS)",
    description:
      "Connecting Talent, Boosting Recruitment. JobLeet makes hiring easy and simple by connecting top talent with the right recruiters.",
    visit: "https://www.jobleet.tech",
    learn: "https://github.com/nixhantb/jobleet-ui",
    skillsDesktop: [
      "C#",
      ".Net",
      "Tailwind",
      "NextJs",
      "PostgresSql",
      "Jest",
      "NUnit",
      "CI/CD",
      "Docker",
    ],
    skillsMobile: [
      "C#",
      ".Net",
      "Tailwind",
      "NextJs",
      "PgSql",
      "Jest",
      "NUnit",
      "CI/CD",
      "Docker",
    ],
  },
  {
    src: brokerImage,
    header: "QuantumMQ",
    description:
      "This project involves the design and implementation of a custom message broker system from scratch, based on a distributed message queuing protocol. The system aims to facilitate efficient, reliable, and scalable communication between services in a distributed environment.",
    visit: "https://nixhantb.github.io/QuantumMQ/",
    learn: "https://github.com/nixhantb/QuantumMQ",
    skillsDesktop: ["C#", ".Net", "CI/CD", "Docker", "Queues", "IP", "Hashing", "Round", "Robin"],
    skillsMobile: ["C#", ".Net", "CI/CD", "Docker", "IP", "Hashing", "Round", "Robin"],
  },
  {
    src: di,
    header: "InjectTron",
    description:
      "InjectTron is a lightweight, customizable Dependency Injection (DI) framework built entirely from scratch in C#. It provides a solid foundation for managing object dependencies in a clean, efficient, and maintainable manner.",
    visit: "https://github.com/nixhantb/InjectTron",
    learn: "https://github.com/nixhantb/InjectTron",
    skillsDesktop: ["C#", ".Net", "NUnit", "Docker", "CI/CD", "DI", "OOPS"],
    skillsMobile: ["C#", ".Net", "NUnit", "Docker", "CI/CD", "DI", "OOPS"],
  },
];

export default function Projects({ title }: Props) {
  return (
    <>
     <div id = "projects">
     <ProjectContainer>
      <ExperienceTitle>
        {title}
        <EngineeringIcon
          sx={{
            fontSize: "1em",
            verticalAlign: "middle",
            marginLeft: "0.5em",
            marginBottom: "0.4%",
            color: "purple",
            display: { xs: "none", sm: "inline" },
          }}
        />
      </ExperienceTitle>

      <ProjectItemContainer>
        {projects.map((project, index) => (
          <ProjectLists
            key={index}
            src={project.src}
            header={project.header}
            description={project.description}
            visit={project.visit}
            learn={project.learn}
            skillsDesktop={project.skillsDesktop}
            skillsMobile={project.skillsMobile}
          />
        ))}
      </ProjectItemContainer>
    </ProjectContainer>
     </div>
    </>
    
  );
}
