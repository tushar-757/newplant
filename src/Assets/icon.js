import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faSave,
  faLeaf,
  faArrowLeft,
  faCheck,
  faTimes,
  faChevronUp,
  faArrowDown,
  faShoppingCart,
  faInfo,
  faTools,
  faSearch,
  faStar,
  faSignal,
  faBars,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
const icons = {
    fileEdit: <FontAwesomeIcon 
        icon={faFileAlt}
        size="2x"
        color="#8280FF"/>,
    save: <FontAwesomeIcon 
        icon={faSave}
        size="2x"
        color="#F397A7"/>,
    leaf: 
    <FontAwesomeIcon 
        icon={faLeaf}
        size= "1x"
        color="yellowgreen"/>,
    backArrow2:  <FontAwesomeIcon 
        icon={faArrowLeft}
        size= "2x"
        color= "darkcyan"/>,
    tick: 
    <FontAwesomeIcon 
        icon={faCheck}
        size= "1x"
        color="green"/>,
    cross: 
    <FontAwesomeIcon 
        icon={faTimes}
        size= "1x"
        color= "red"
  />,
    arrowup: 
    <FontAwesomeIcon 
        icon={faChevronUp}
        size= "1x"
        color= "white"
  />,
    downArrow: 
    <FontAwesomeIcon 
        icon={faArrowDown}
        size= "1x"
        color= "black"
  />,
    shoppingcart: 
    <FontAwesomeIcon 
        icon={faShoppingCart}
        size= "1x"
        color= "darkcyan"
  />,
    info: 
    <FontAwesomeIcon 
        icon={faInfo}
        size= "1x"
        color= "white"
    />,
    tools: 
    <FontAwesomeIcon 
        icon={faTools}
        size= "1x"
        color= "Black"
  />,
    search: 
    <FontAwesomeIcon 
        icon={faSearch}
        size= "1x"
        color= "white"
  />,
    star: 
    <FontAwesomeIcon 
        icon={faStar}
        size= "1x"
        color= "#ff253a"
   />,
    Signal: 
    <FontAwesomeIcon 
        icon={faSignal}
        size= "1x"
        color= "#00a6ff"
   />,
   bars:
   <FontAwesomeIcon
   icon={faBars}
   size="1x"
   color="white"
   />,
   cross:
   <FontAwesomeIcon
   icon={faTimesCircle}
   size="1x"
   color="white"
   />
}
export default icons;