// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";



import ConfigIcon from '../ConfigIcon';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Container, Row, Col } from 'react-bootstrap';
const ProfilePic_1 = require(`../../images/ProfilePic_1.jpeg`);

function Home() {
  return (
    // Return Div
    <div>

      <Container fluid >
        <Row >
          {/*Hero Div  */}
          <Col md={10}>
            {/* <div style={{ display: 'flex', justifyContent: 'center' ,width:"100%" }}> */}
            {/* About You Card */}
            <Card border="light" bg='light' text='dark' className="mb-4" >
              <Card.Body style={{ display: "inline-block", alignItems: "center", textAlign: 'Center' }}>
                <Card.Title >
                  About Me
                </Card.Title>
                <Card.Text>
                  Solution Architect responsible for designing and<br></br>  implementing complex technology solutions
                  <br></br> that meet the needs of clients.
                  <br></br>
                  <strong>Web Developer in Training.</strong>
                  <br></br>
                  <br></br>
                  London • United Kingdom
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Image Card */}
          <Col>
            <Card border='light' bg='light' className="mb-2">
              <Card.Img variant="top" src={ProfilePic_1} style={{ objectFit: 'contain', height: "205px" }} />
            </Card>
            {/* </div> */}
          </Col>
          {/* Hero Div Ends */}
        </Row>
        {/*Skills  */}
        <Row>
          <Card border='light' bg='light'>
            <Card.Body style={{ display: 'inline-block', alignContent: 'center' }}>
              <Card.Title >
                Skills
              </Card.Title>
              <ProgressBar now={80} variant='success' label={"JavaScript"} style={{ alignContent: 'center', height: "20px", margin: "15px" }} />
              <ProgressBar now={80} variant='success' label={"Azure"} style={{ alignContent: 'center', height: "20px", margin: "15px" }} />
              <ProgressBar now={80} variant='success' label={"EAI"} style={{ alignContent: 'center', height: "20px", margin: "15px" }} />
              <ProgressBar now={70} variant='success' label={"Html"} style={{ alignContent: 'center', height: "20px", margin: "15px" }} />
              <ProgressBar now={70} variant='success' label={"DevOps"} style={{ alignContent: 'center', height: "20px", margin: "15px" }} />
              <ProgressBar now={60} variant='info' label={"React"} style={{ alignContent: 'center', height: "20px", margin: "15px" }} />
              <ProgressBar now={40} variant='danger' label={"CSS"} style={{ alignContent: 'center', height: "20px", margin: "15px" }} />
            </Card.Body>
          </Card>
        </Row>
        <br></br>
        <br></br>

        {/* Icons for Github Linked Resume and Email */}
        <Row>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card border='white'>
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title >
                  <ConfigIcon><a href='https:\\www.github.com\thomasptharakan'><FaGithub /></a>
                  </ConfigIcon>
                  &nbsp;&nbsp;&nbsp;
                  <ConfigIcon><a href="https://www.linkedin.com/in/thomastharakan"><FaLinkedin /></a></ConfigIcon>
                  &nbsp;&nbsp;&nbsp;
                  <ConfigIcon><a href="./documents/CV.pdf" download="CV_2022.pdf"><FaFilePdf /></a></ConfigIcon>
                  &nbsp;&nbsp;&nbsp;
                  <ConfigIcon><a href="mailto:thomasptharakan@gmail.com"><AiOutlineMail /></a></ConfigIcon>

                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Home;