import React from "react";
import { useParams } from 'react-router-dom';
import Container from "./Container";

const Search = () => {
    const searchTerm = useParams();
    return (
    <div>
            <h2>{searchTerm.searchInput} Images</h2>
            <Container searchTerm={searchTerm.searchInput} />
    </div>
  );
};

export default Search;
