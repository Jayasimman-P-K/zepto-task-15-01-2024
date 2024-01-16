import React, { useContext } from "react";
import ListsItem from "./ListsItem";
import { MyContext } from "../MyContext";

const NameLists = () => {
  const { nameLists, inputValue } = useContext(MyContext);

  return (
    <div className="shadow-neutral-300 shadow-lg border-[3px] border-neutral-300 max-h-56 overflow-y-scroll no-scrollbar bg-neutral-50">
      {nameLists
        .filter((items) =>
          items.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((names) => (
          <ListsItem
            name={names}
            mailID={
              names[0].toLowerCase() +
              "." +
              names.toLowerCase().split(" ").pop() +
              "@example.com"
            }
          />
        ))}
    </div>
  );
};

export default NameLists;
