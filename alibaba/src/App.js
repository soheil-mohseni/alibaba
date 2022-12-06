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
              // <div class="border-round w-12rem h-6rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center">2</div>

              <Card
                key={index}
                class="border-round w-25rem h-18rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center"
                title="Advanced Card" 
                subTitle="Subtitle"
                // style={{ width: "15em" ,}}
                footer={footer}
                header={<img
                  alt="Card"
                  src="images/usercard.png"
                  style={{maxWidth: "100%",display:"block"}}
                  onError={(e) =>
                    (e.target.src = `${cu.flags[0]}`)
                  }
                />}
              >
                {/* <br/><br/><br/><br/> */}
                <p className="m-0" style={{ lineHeight: "1.5" }}>
                  a : bg b: 2 c:4
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
