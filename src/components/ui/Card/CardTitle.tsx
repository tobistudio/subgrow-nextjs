import {Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { brands } from "../../../configs/colors/default";
const CardTitle = ({link, size, variant, mode}) => {

  let icon
  switch(link.icon) {
    case "faFacebook":
      icon = faFacebook
      // color
      break;
    case "faTwitter":
      icon = faTwitter
      break;
    default:
    // code block
  }

  // TODO: handle icons and images


  if(icon) {
    return (
      <><Typography variant={variant} color={mode === "dark" ? "text.light" : "text.dark"}><FontAwesomeIcon icon={icon} size={size} color={brands.facebook} />{link.title}</Typography></>
    )
  } else {
    return (
      <><Typography variant={variant} color={mode === "dark" ? "text.light" : "text.dark"}>{link.title}</Typography></>
    )
  }


};

export default CardTitle
