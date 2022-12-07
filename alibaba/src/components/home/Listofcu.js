import { Button } from "primereact/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Listofcu(props) {
  const [listofcu, setListofcu] = useState([]);
  const [searchcu, setSearchcu] = useState([]);

  useEffect(() => {
    console.log("2222222222222222");
    countrieshandler();
  }, []);

  const countrieshandler = async () => {
    const rescu = await axios.get("https://restcountries.com/v3/all");
    console.log(rescu.data);
    setListofcu(rescu.data);
  };

  return (
    <>
      <div class="card">
        <div class="flex flex-wrap justify-content-center card-container blue-container gap-6">
          {listofcu
            .filter((li) => {
              if (props.list) {
                if (li?.name?.common.includes(props.list)) {
                  return li;
                } else {
                  return null;
                }
              } else {
                return li;
              }
            })
            .map((cu, index) => {
              return (
              <>
                <Link key={index} to={`/detail/${cu?.name?.common}`}>
                        <div
                        key={index}
                          style={{
                            marginBottom: "36px",
                            marginTop: "33px",
                            borderRadius: "80px",
                          }}
                          class="border-round w-17rem h-74rem bg-white text-white font-bold flex align-items-center justify-content-start"
                        >
                          <div
                            style={{
                              display: "block",
                              maxWidth: "100%",
                              position: "relative",
                              borderRadius: "80px",
                              bottom: "65px",
                            }}
                          >
                            <img
                              style={{
                                maxWidth: "272px",
                                height: "14rem",
                                borderRadius: "60px",
                              }}
                              src={cu?.flags[1]}
                            />
                            <h2 style={{ paddingLeft: "16px", color: "black" }}>
                              {cu?.name?.common}
                            </h2>
                            <h5 style={{ paddingLeft: "16px", color: "black" }}>
                              Population: {cu?.population}
                            </h5>
                            <h5 style={{ paddingLeft: "16px", color: "black" }}>
                              Region: {cu?.region}
                            </h5>
                            <h5 style={{ paddingLeft: "16px", color: "black" }}>
                              Capital: {cu?.capital}
                            </h5>
                          </div>
                        </div>
                  </Link>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Listofcu;
