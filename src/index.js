import React from "react";
import ReactDom from "react-dom";
import "./index.css"

import App from "./App.js";
/*const name="Kritan";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();
const cssStyle={};
let greeting=new Date().getHours();
if(greeting>=1&&greeting<12){
   greeting="Good morning";
   cssStyle.color="green";}
   else if(greeting>11&&greeting<20){
       greeting="Good Afternoon";
   cssStyle.color="Orange";

   }else {
       greeting="Good Night";
       cssStyle.color="red";
    }

const heading ={color:"#fa9191",
textAlign:'center',
textTransform:'capitalize',
fontWeight:'bold',
textShadow:'0px 2px 4px #ffe9c5',
margin:'70px 0'}*/
ReactDom.render(
    <React.Fragment>
     
<App />

</React.Fragment>,document.getElementById("root"));
