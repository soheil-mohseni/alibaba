import "primeflex/primeflex.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../home/Title";
import { InputText } from "primereact/inputtext";

function Titles(props) {
  return (
    <>
       <>
      <div class="card">
        <div class="flex card-container blue-container overflow-hidden">
          <div class="flex-grow-1 flex  bg-blue-500 font-bold text-white m-0 px-0 py-0 border-round">
            <div class="flex-grow-1 flex justify-content-start align-items-center bg-blue-500 font-bold text-white m-0 px-5 py-3 border-round">
              <h2 style={{ margin: "0px" }}>where in the world ?</h2>
            </div>

            <div class="flex-grow-1 flex align-items-center justify-content-end bg-blue-500 font-bold text-white m-0 px-5 py-3 border-round">
              Dark mode
            </div>
          </div>
        </div>
      </div>
    </>
    </>
  )
}

export default Titles;
