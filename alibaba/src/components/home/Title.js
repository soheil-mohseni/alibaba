import "primeflex/primeflex.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";

function Title(props) {
  const [listofcu, setListofcu] = useState([]);
  const [value3, setValue3] = useState("");

  // useEffect(() => {
  //   console.log("2222222222222222");
  //   countrieshandler();
  // }, []);
  // const countrieshandler = async () => {
  //   const rescu = await axios.get("https://restcountries.com/v3/all");
  //   console.log(rescu.data);
  //   setListofcu(rescu.data);
  // };

  return (
    <>
      <div class="card">
        <div class="flex card-container blue-container overflow-hidden">
          <div class="flex-grow-1 flex  bg-blue-500 font-bold text-white m-0 px-0 py-0 border-round">
            <div class="flex-grow-1 flex justify-content-start align-items-center bg-blue-500 font-bold text-white m-0 px-5 py-3 border-round">
              <h2 style={{ margin: "0px" }}>where in the world ?</h2>
            </div>
            <div style={{width: "30%"}} class="flex-grow-1 flex align-items-center justify-content-start bg-blue-500 font-bold text-white m-0 px-0 py-3 border-round">

              <span style={{ width: "100%" }} class="p-input-icon-left ml-0">
                <i class="pi pi-search" />
                <InputText
                  style={{ width: "90%" }}
                  onChange={(e) => props.onsearch(e.target.value)}
                  placeholder="Search"
                />
              </span>
            </div>
            <div class="flex-grow-1 flex align-items-center justify-content-end bg-blue-500 font-bold text-white m-0 px-5 py-3 border-round">
              Dark mode
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Title;
