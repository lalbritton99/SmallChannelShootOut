import React from 'react';
import { Button, Card,  Container, Row, Col, Form, Toast } from "react-bootstrap";
import "../style/talk.scss";
import {AiOutlinePlus} from "react-icons/ai";
import {FiThumbsDown, FiThumbsUp} from "react-icons/fi";
import toast from "../images/toast.png";

const threadbox=[
    {title:"Thread 1", user:"User01", timestamp:"just now", likes:"62"},
    {title:"Thread 2", user:"User12", timestamp:"just now", likes:"5.4k"},
    {title:"Thread 3", user:"User23", timestamp:"just now", likes:"69k"},
    {title:"Thread 4", user:"User34", timestamp:"2 min ago", likes:"0"},
    {title:"Thread 5", user:"User45", timestamp:"2 min ago", likes:"777"},
    {title:"Thread 6", user:"User56", timestamp:"3 min ago", likes:"15k"},
    {title:"Thread 7", user:"User67", timestamp:"4 min ago", likes:"420"},
    {title:"Thread 8", user:"User78", timestamp:"10 min ago", likes:"15k"},
    {title:"Thread 9", user:"User89", timestamp:"45 min ago", likes:"10k"},
    {title:"Thread 10", user:"User90", timestamp:"1 hr ago", likes:"3"},
];

function Thread(props) {
  return (
    <>
      {props.threadbox.map((thread, i) => (
        <Card className="backside" key={i} style={{minWidth: '18rem',  flexGrow: 1}} >
        <Card.Body>

          <Card.Title style={{backgroundColor:'white', borderRadius:'5px'}}> 
          &nbsp;
         <div className="ml-4">
         <img src={toast} className="rounded mr-2"  />
           &nbsp; 
           <span>{thread.title}</span>
           <span> &nbsp; &nbsp; ||&nbsp; {thread.user}</span>

           
         </div>
          
           
           <div className="d-flex justify-content-end mt-sm-6" style={{marginTop:'9px', color:'#B6B6B4'}}>
           <small>
              {thread.timestamp}&nbsp;&nbsp;&nbsp;
            </small>
             </div>   
               
            </Card.Title>
          <div style={{borderTop: "4px solid #E5E4E2 ", borderRadius:'15px' }}></div><br/>
          
          <Card.Subtitle className="mb-2 text-muted">
            
          </Card.Subtitle>        

          {/* -- BUTTONS -- 
          <Button variant="primary">Comments</Button>
          <Button variant="primary">Share</Button>
          <Button variant="primary">Save</Button>
          <Button variant="primary">...</Button>
          */}
<p> 
sdLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
{/* <div style={{borderTop: "4px solid #E5E4E2 ", borderRadius:'15px' }}></div> */}
<hr style={{height:'2px', color:'#E5E4E2'}} />
&nbsp;&nbsp;&nbsp;<FiThumbsUp className="like-btn" size="1.5em" color="green"/>

            &nbsp;
            {thread.likes}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/*   <Button variant=""> */}
            <FiThumbsDown className="dislike-btn" size="1.5em" color="red"/>
          {/*   </Button> */}
        </Card.Body>
      </Card>
       /* <Toast className="backside" closeButton='false'>
          <Toast.Header> */

          /*   Likes */
           /*  <FiThumbsUp className="like-btn" size="1.25em" color="green"/>

            &nbsp;
            {thread.likes}
            &nbsp;

            <FiThumbsDown className="dislike-btn" size="1.25em" color="red"/>
 */
            /*Profile Picture*/
           /*  &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={toast} className="rounded mr-2"/> */

            /*Username*/
           /*  <strong className="mr-auto">
              {thread.user}      
            </strong> */

            /*Title*/
            /* <medium className="mr-auto">
              {thread.title}
              &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </medium>
             */
            /*Timestamp*/
           /*  <small>
              {thread.timestamp}
            </small>
          </Toast.Header>
 */
          /*Message*/
          /* <Toast.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Toast.Body>
        </Toast> */
          
      ))}
    </>
  );
}

function talk(){
  return(
    <>
      <Container fluid>
        <br/>

        <Button className="plus"/*  style={{ marginBottom: "2px", marginTop: "2px",  color:'white', fontSize: '20px'}} */ variant="" href="/createthread"  >
          <AiOutlinePlus size="3em"/>Create a thread!
        </Button>

        <br/><br/>

        <div style={{borderTop: "4px solid #000 " }}></div>
        <br/>

        
<Row className="justify-content-center ml-md-2 ">
  <Col md={7}>
  <div className="">
          <Thread threadbox={threadbox} />
        </div>
  </Col>
  <Col md={3}>
  Ads:
  <br/>
  sdLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Col>
</Row>
        

      </Container>
    </>
  );
}
export default talk;
