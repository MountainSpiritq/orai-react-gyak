import React, { useEffect, useState } from "react";
import { categories } from "../utils";

export default function Categories({ setSelectedCateg, selectedCateg }) {
  return (
    <div className="join flex justify-center flex-wrap p-2 items-center  m-2">
      {categories().map((categ) => (
        <input
          onClick={() => setSelectedCateg(categ)}
          key={categ}
          className="join-item btn"
          type="radio"
          name="options"
          aria-label={categ}
        />
      ))}
    </div>
  );
}
