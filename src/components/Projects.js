import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Web/Discord App Dev",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "AI/ML Dev",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "AI Bot Dev",
      description: "Design & Development",
      imgUrl: projImg3,
      
    },
    
    
  ];
  const experience = [
    {
      title: "Web/Discord App Dev",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "lol",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "AI Bot Dev",
      description: "Design & Development",
      imgUrl: projImg3,
    },

  ]
  const cybersec = [
    {
      title: "Web/Discord App Dev",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "lol",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "AI Bot Dev",
      description: "Design & Development",
      imgUrl: projImg3,
    },

  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Achievements</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-left align-items-left" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Cybersec</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>
                   <p> <b>2020-2021</b></p>
                   
                    
                        <p> <b>Hephzibah Publishing House,South Korea:</b> Translation,Proofreading and DTP of 2 books(~600 pages) from English to Odia</p>
                                               
                        <p><b>2022-current</b></p>
                        
                          <p><b>Quest Alliance:  EdTech Intern </b></p>                                                  
                      
                                                                     
                        <p>Developed ChatBot enabled coding lesson for Secondary school students.</p>
                        <p>Facilitated Coding Workshop for students.</p>                       
                        <p>Designed SOP for coordinating the onboarding and technical support to launch MCT on Quest App.</p>          
                        <p>Analysis and troubleshooting of Backend data from the Quest App dashboard.</p>      
                               
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <ul>
                      <li>Top 4% in tryhackme.com. profile: &nbsp;<a href="https://tryhackme.com/p/fubuki">fubuki</a>
                      </li>
                      <li>Global rank of #613 in hackthebox.com. profile: &nbsp;<a href="https://app.hackthebox.com/users/278533">daWn</a></li>
                      <li>Experience in work and troubleshooting of Linux Systems. </li>
                      <li>Used Wireshark,Metasploit,Burpsuite,Sqlmap,etc</li>
                    </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
