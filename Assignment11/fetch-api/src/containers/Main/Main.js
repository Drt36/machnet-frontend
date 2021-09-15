import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./main.css";

const Main = () => {
  const [sampleSuit, setSampleSuit] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [newSampleSuit, setNewSampleSuit] = useState([]);

  let loader = false;

  const getSampleSuit = async () => {
    try {
      loader = true;
      const response = await axios.get(
        "https://api-test-tmswdr.herokuapp.com/samplesuit"
      );
      setSampleSuit(response.data);
    } catch (exception) {
      console.log(exception);
    } finally {
      loader = false;
    }
  };

  useEffect(() => {
    getSampleSuit();
  }, []);

  const filterSampleSuit = (e) => {
    let searchTerm = e.target.value.toLowerCase();
    setSearchInput(searchTerm);
    if (searchInput.length > 0) {
      const updatedSampleSuit = sampleSuit.filter((currentSuit) => {
        return currentSuit.Design_title.toLowerCase().includes(searchInput);
      });
      setNewSampleSuit(updatedSampleSuit);
    } else {
      setSampleSuit(sampleSuit);
    }
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Type here to search..."
          onChange={filterSampleSuit}
          name="search"
        />
      </div>
      {loader === true ? (
        <h2>Loading....</h2>
      ) : (
        <Card suit={searchInput.length > 0 ? newSampleSuit : sampleSuit} />
      )}
    </>
  );
};

export default Main;
