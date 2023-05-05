import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";


// import styles from'./assets/css/app.css';
var cors = require("cors");

//chrome.action.onClicked.addListener
function Popup() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState(null); //aqui se declara

  useEffect(() => {
    //esto es una funcion de chrome dentro de una funcion de react, hay que declararlo siempre primero a la que
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // since only one tab should be active and in the current window at once
      // the return variable should only have one entry
      setActiveTab(tabs[0]);
    });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/webs`) //https:
  //     .then((result) => {
  //       console.log(result.data);
  //       setData(result.data); //or reponse.data
  //     })
  //     .catch(console.error);
  // }, []);
  
  useEffect(() => {
    axios.get(`https://phishing-url-risk-api.p.rapidapi.com/url/`,
      {
        params: {
          url: '',
        },
        headers: {
          // result_data: '', // '',
          "Content-Type": "application/octet-stream",
          "X-RapidAPI-Key":  "e68c4670ddmshc17375931006d9cp124b02jsn0866f15f9fc8",
          "X-RapidAPI-Host": "phishing-url-risk-api.p.rapidapi.com", 
          
        }
        
      })
        .then((result) => {
          console.log(result.data);
          setData(result.data); //or reponse.data
        })  
        .catch(console.error);
  }, []);


  // useEffect(() => {
  //   if (activeTab) {
  //   axios.post(`https://fraudfreeze-phishing-check.p.rapidapi.com/`,
  //     {
  //       headers: {
  //         url: '',
  //         "X-RapidAPI-Key":  "e68c4670ddmshc17375931006d9cp124b02jsn0866f15f9fc8",
  //         "X-RapidAPI-Host": "fraudfreeze-phishing-check.p.rapidapi.com", 
          
  //       }
        
  //     })
  //       .then((result) => {
  //         console.log(result.data);
  //         setData(result.data); //or reponse.data
  //       })  
  //       .catch(console.error);
  //     }
  // }, []);
  // useEffect(() => {
  //   if (activeTab) {
  //     axios
  //       .post(`http://localhost:8000/webs`, {
  //         headers: {
  //           url: "",
  //         },
  //       })
  //       .then((result) => {
  //         console.log("Hi");
  //         setData(result.data); //or reponse.data
  //       })
  //       .catch(console.error);
  //   }
  // }, [activeTab]);
  // se manda una vez que haya informacion dentro de activeTab, ya que de primeras hemos declarado que esa variable es null

  return (
    <div className="app">
      <img src="logofinal2.png"></img>
      <img src="name2.png"></img>
      {/* <h2 className="font">Safe Red</h2> */}
      <p class="orange">{activeTab ? activeTab.url : ""}</p>
      <hr class="blue"></hr>

      <p>This is a Pop Up created with React that shows an URL</p>
      <p>{activeTab ? activeTab.url : ""}</p>
      {/* happening twice; lo registra dos veces, ya que de primeras hemos declarado que "activeTab" era null, entonces a la que 
      registra ya se activa, pero por eso se necesita el if statement */}
      {/* de esta manera checkeamos si activeTab tiene valor null o no. Si hay valor null, react no puede como tal mostrar nada, */}
      {/* ya que useEffect ha tenido efecto antes de eso. */}
      {/* <p>{data ? data.webs : ""}</p>
      <p>{data.webs}</p> */}
      {/* <p>{data.Ai_model_phishing_predict_score}</p>
      {data.lenght} */}
      <hr></hr>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
