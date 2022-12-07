import "primeflex/primeflex.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Listofcu from "./Listofcu";
import Title from "./Title";

function Home(props) {
  const [listofcu, setListofcu] = useState([]);
  const [search, setSearch] = useState([])
  useEffect(() => {
    console.log("2222222222222222");
    countrieshandler();
  }, []);

  const countrieshandler = async () => {
    const rescu = await axios.get("https://restcountries.com/v3/all");
    console.log(rescu.data);
    setListofcu(rescu.data);
  };
  const onsearchHandler = async (searchs) => {
    console.log(search);
    setSearch(searchs)
  };
  return (
    <>
    <Title onsearch={onsearchHandler}/>
    {/* <Search/> */}
    <br/><br/><br/><br/>
    <Listofcu list={search} />
    </>
  )
}

export default Home;
