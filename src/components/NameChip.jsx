import React, { useContext } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { MyContext } from "../MyContext";

const NameChip = ({ name }) => {
  const { nameLists, setNameLists, chipLists, setChipLists } =
    useContext(MyContext);

  const handleClick = (name) => {
    setChipLists(chipLists.filter((item) => item !== name));
    setNameLists([...nameLists, name]);
  };

  return (
    <div className="flex items-center bg-neutral-200 mx-1 p-1 rounded-full gap-1">
      <img
        className="h-5"
        alt="profile-img"
        src="https://avatar.iran.liara.run/public"
      />
      <p className="text-sm">{name}</p>
      <VscChromeClose
        className="cursor-pointer"
        onClick={() => handleClick(name)}
      />
    </div>
  );
};

export default NameChip;
