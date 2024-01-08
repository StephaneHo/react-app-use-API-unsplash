import React, { useState } from "react";

export const SearchBar = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};
