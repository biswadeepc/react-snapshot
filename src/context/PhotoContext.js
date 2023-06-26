import React, { createContext, useState } from "react";
//import axios from "axios";
//import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = async (query) => {
  /*
      axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
   */
      const response = await fetch('https://react-demo-1775-default-rtdb.asia-southeast1.firebasedatabase.app/pics.json');
      if (!response.ok) {
          console.log('Error');
      }
      const data = await response.json();
      //console.log(data['-NTIi23frRXG1CAsjb-c']);
      setImages(data['-NTIi23frRXG1CAsjb-c'].images);
      setLoading(false);
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
