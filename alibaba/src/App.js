import "primeflex/primeflex.css";
import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import axios from "axios";

function App() {
  const [listofcu, setListofcu] = useState([]);

  useEffect(() => {
    console.log("2222222222222222");
    countrieshandler();
  }, []);

  const countrieshandler = async () => {
    const rescu = await axios.get("https://restcountries.com/v3/all");
    console.log(rescu.data);
    setListofcu(rescu.data);
  };

  // const header = 
  // // <> {cu?.flag}</>;

  // <img
  //   alt="Card"
  //   src="images/usercard.png"
  //   onError={(e) =>
  //     (e.target.src = `${cu.flags[1]}`)
  //   }
  // />
  const footer = (
    <>
      <div
      // style={{position:"relative"}}
      >
        <Button label="Save" icon="pi pi-check" />
      </div>
    </>
  );
  return (
    <>
      <div class="card">
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-6">
          {listofcu.map((cu, index) => {
            return (
              
              <>
              
              <div style={{marginBottom: "36px" ,marginTop:"33px"}} class="border-round w-17rem h-74rem bg-white text-white font-bold flex align-items-center justify-content-start">
              <div style={{display:"block",maxWidth:'100%' ,position: "relative" , bottom: '65px'}} >
                <img style={{maxWidth:'272px', height: "14rem",}} src= {cu?.flags[1]}></img>                
                <h2 style={{paddingLeft: "16px", color: 'black'}}> {cu?.name?.common}</h2>
                <h5 style={{paddingLeft: "16px", color: 'black'}}> Population: {cu?.population}</h5>
                <h5 style={{paddingLeft: "16px", color: 'black'}}> Region: {cu?.region}</h5>
                <h5 style={{paddingLeft: "16px", color: 'black'}}> Capital: {cu?.capital}</h5>

              </div>
              
              </div>
              </>  
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
