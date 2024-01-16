import React, { useContext } from "react";
import NameLists from "./NameLists";
import NameChip from "./NameChip";
import { MyContext } from "../MyContext";

const InputBox = () => {
  const {
    isItemBoxVisible,
    setIsItemBoxVisible,
    chipLists,
    inputValue,
    setInputValue,
  } = useContext(MyContext);

  return (
    <div className="border-b-[3px] border-blue-400 py-2 flex items-center">
      <div className="flex">
        {chipLists.map((name) => (
          <NameChip name={name} />
        ))}
      </div>
      <div className="">
        <input
          type="text"
          value={inputValue}
          onFocus={() => setIsItemBoxVisible(true)}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className={"bg-neutral-100 w-full focus:outline-none"}
        />
        <div
          className={
            isItemBoxVisible ? "absolute my-2 block" : "absolute my-2 hidden"
          }
        >
          <NameLists />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
