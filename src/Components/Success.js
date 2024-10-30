import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import Loading from './Loading';
import Cookies from 'js-cookie';
import image from './sat_img.jpg';
import {v4 as uuidv4} from 'uuid'; 

const Success = () => {

    
const uniqueId=uuidv4();
      const [cards,setCards]=useState([]);
      const [loader, setLoader]=useState(false);
      const generateLink = (path) => `/${path.slice(1,9)}/${uniqueId}`;

      
      useEffect(()=>{
        setLoader(true);

        const starting_01=async ()=>{
         try {
          const token =Cookies.get('authToken');

          const response =await fetch('http://localhost:8080/user/data/success',{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
              'authorization':`Bearer ${token}`
            },
            credentials:'include',
          });
          if (!response.ok) {
            console.log(response)
            console.log('Failed to fetch stories');
            return;
          }
          
          const data = await response.json();
          setCards(data);
         } catch (error) {
          console.log(error);
         }
         finally{
          setLoader(false);
         }
        }
      starting_01();
      },[])

      
  return (
    <div className='container_04'>

      {loader?(<Loading/>):(

         <>
        
        
        
        <Navbar/>

        <style>
        {`
          * {
            font-family: "Noto Sans", sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          .nav-home {
            display: flex;
            justify-content: space-between;
          }

          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-size: cover;
          }
          
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
          }
          
          input {
            text-align: center;
          }
          
          .form_01 {
            display: flex;
            justify-content: center;
            margin-top: 10%;
            text-align: center;
          }
          
          .conatiner {
            display: grid;
          }
          
          .btn {
            margin-top: 56px;
            width: 100%;
          }
          
          .Page_01 {
            text-align: center;
          }
          
          .Page_01 h1 {
            margin-top: 30px;
          }
          
          .btn_02 {
            width: 37%;
            margin: auto;
            margin-bottom: 40px;
            margin-top: 10px;
          }
          
          .form-group {
            margin-top: 10%;
          }
          
          .form_02 {
            text-align: center;
            display: grid;
            justify-content: center;
            margin-top: 10%;
          }
          
          .container_02 {
            display: flex;
            justify-content: center;
          }
          
          .subContainer_02 {
            margin: auto;
            margin-top: 10%;
          }
          
          .label_02 {
            margin-right: 10px;
          }
          
          .b_01 {
            margin-top: 0px;
            width: 155%;
          }

          .onlyPara {
            text-align: center;
          }
          
          .add {
            margin: auto;
            text-align: center;
          }
          
          .results {
            display: grid;
            justify-content: center;
          }
          
          .card {
            flex-basis: calc(33.33% - 16px); 
            box-sizing: border-box;
          }
          
          .container_03 {
            display: flex;
            flex-wrap:wrap;
            text-align:center;
            justify-content:center;
            gap:15px;
            width:100%;
            padding:10px;
           
          }
          
          .card-body {
            text-align: center;
          }
          
          .c_05 {
            display: grid;
            text-align: center;
            border: 3px solid black;
            width: 80%;
            margin: auto;
            margin-top: 10px;
            margin-bottom: 20px;
          }
          
          .c_05 p {
            margin: auto;
            width: 60%;
            margin-top: 20px;
            margin-bottom: 40px;
          }
          
          .sticky-navbar {
            position: sticky;
            top: 0;
            z-index: 100;
          }
          
          .input_job_01 {
            width: 60%;
            margin: auto;
          }
          
          .text_form {
            text-align: center;
          }
          
          .text_form button {
            width: 40%;
            margin: auto;
            margin-bottom: 70px;
          }
          
          .label_02 {
            margin-top: 30px;
            margin-bottom: 30px;
          }
          
          .check_01 {
            margin-left: 148px;
          }
          
          .form_03 {
            display: grid;
            justify-content: center;
            margin-top: 5%;
            text-align: center;
          }
          
          .form_03 input {
            margin: auto;
            margin-top: 10px;
            width: 60%;
            text-align: center;
          }
          
          .calander {
            margin-top: 20px;
          }
          
          .form-group_01 {
            margin-top: 30px;
          }
          
          .events_cal {
            display: grid;
            justify-content: center;
          }
          
          .event_h3 {
            display: grid;
            justify-content: center;
            text-align: center;
          }
          
          .event-details {
            display: grid;
            width: 100%;
            justify-content: center;
          }
          
          .child_event {
            margin: auto;
            margin-top: 20px;
          }
          
          .img_qr_01 {
            width: 19%;
            height: 94%;
            margin: auto;
          }
          
          .btn_01 {
            width: 30%;
            margin: auto;
            margin-top: 30px;
            margin-bottom: 30px;
          }
          `}
      </style>

<div className='container_00101' style={{display:'flex', flexDirection:'column'}}>
  <div className='container_002' style={{margin:'auto'}}>

    <h2>Want to add a new story ? </h2>
    <Link to={generateLink('/addStory/:id')} > <button className='btn btn-primary btn_02' style={{ marginLeft: '20%',
  width: '55%'}} >Add Here </button></Link>
  </div>
    <div className='container_03'>
     {cards.map((element,index)=>(
       
      <div className="card" key={index}>
      <img src={image} className="card-img-top" alt="..." style={{height:'35%'}}/>
      <div className="card-body">
      <h3 className="card-title">{element.title}</h3>
      <h5 className="card-title">{element.name}</h5>
      <h6 className="card-title">{element.description}</h6>
  </div>
</div>
     ))}
    </div>
    </div>
    </>
  )}
     </div>
  )
}

export default Success
