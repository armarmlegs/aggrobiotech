

import React from "react";
import { DropdownLink, DropdownMenuLi, DropdownContainer } from './dropDownElements';

const Dropdown = ({dropdown, droppy}) => {
  return (
    <DropdownContainer dropdown={dropdown} >
      <DropdownMenuLi>
          <DropdownLink to="/ComCrops"> Commercial Crops</DropdownLink>
          <DropdownLink to="/FoodCrops"> Food Crops</DropdownLink>
          <DropdownLink to="/FruitsVeggies"> Fruits & Vegetables</DropdownLink>
      </DropdownMenuLi>
    </DropdownContainer>
  );
};

export default Dropdown;
