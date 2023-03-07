// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaLinkedin  } from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaFilePdf} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";


import ConfigIcon from '../ConfigIcon';
import CardGroup from 'react-bootstrap/CardGroup';


function Home() {
  return (
    <div>
    <div style={{display:'flex', justifyContent:'center'}}>
    <CardGroup>
      <Card border='white' >
        <Card.Body style={{display:"flex",alignItems:"center",textAlign:'right'}}>
          <Card.Title>
           Solution Architect responsible for designing and implementing complex technology solutions that meet the needs of clients. 
           <br></br>
           Web Developer in Training.
           <br></br>
           <br></br>
            Skills : Azure • React • JavaScript • EAI • DevOps 

           </Card.Title>
           
        </Card.Body>
      </Card>
      <Card border='white' style={{display:"flex",alignItems:"center"}}>
        <Card.Img variant="top" src="/ProfilePic_1.jpeg" style={{width:"400px"}}/>
      </Card>
      </CardGroup>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div style={{display:'flex', justifyContent:'center'}}>
    <Card border='white'>
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title >
            <ConfigIcon><a href='https:\\www.github.com\thomasptharakan'><FaGithub /></a>
            </ConfigIcon>
            &nbsp;&nbsp;&nbsp;
            <ConfigIcon><a href="https://www.linkedin.com/in/thomastharakan"><FaLinkedin /></a></ConfigIcon>
            &nbsp;&nbsp;&nbsp;
            <ConfigIcon><a href="./ThomasTharakanCV_2022.pdf"><FaFilePdf /></a></ConfigIcon>
            &nbsp;&nbsp;&nbsp;
            <ConfigIcon><a href="mailto:thomasptharakan@gmail.com"><AiOutlineMail /></a></ConfigIcon>
            
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default Home;