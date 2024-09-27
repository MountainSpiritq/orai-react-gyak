import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { data } from "../data";

export default function Menus({ selectedCateg }) {
  const [menus, setMenus] = useState(null);

  useEffect(() => {
    setMenus(
      selectedCateg == "all"
        ? data
        : data.filter((obj) => obj.category == selectedCateg)
    );
  }, [selectedCateg]);
  menus && console.log(menus);

  return (
    <div className="flex flex-wrap justify-center">
      {menus &&
        menus.map((obj) => (
          <div className="card bg-gray-800 max-w-96 shadow-xl p-2 m-2 min-h-max">
            <figure className="h-48 bg-center">
              <img className="object-cover" src={"images/" + obj.img} alt={obj.title } />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{obj.title}</h2>
              <p className="" >{obj.desc}</p>
              <div className="card-actions justify-end">
                <p className="italic">{obj.price} usd</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
