import Navbar from "./Components/Navbar/Navbar";

import "./index.css"
import {Outlet} from "react-router-dom";
import { fetchNewAlbums, fetchTopAlbums } from "./api/Api";
import { StyledEngineProvider } from "@mui/material";
import React, { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => {
        return {...prevData, [key]: data};
      });
    });
  };
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
   
  }, []);

  const { topAlbums = [], newAlbums = [] } = data;
  return (
    <>
      <StyledEngineProvider >
        <Navbar  />
        <Outlet context={{ data: {topAlbums, newAlbums} }} />
      </StyledEngineProvider>
    </>
  );
  }

 
  
  

export default App;

