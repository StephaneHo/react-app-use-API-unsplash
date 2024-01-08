import { useState } from "react";
import { searchImages } from "./api";
import { SearchBar } from "./components/SearchBar";
import { ImageList } from "./components/ImageList";

function App() {
  return (
    <>
      <h1>Liste d images</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
