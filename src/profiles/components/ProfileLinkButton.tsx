import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"

export default function ProfileLinkButton({ icon, size  }: any) {

  let fontIcon
  switch(icon) {
    case 'faFacebook':
      fontIcon = <FontAwesomeIcon icon={faFacebook} size={size} />
      break;
    case 'faTwitter':
      fontIcon = <FontAwesomeIcon icon={faTwitter} size={size} />
      break;
    case 'faInstagram':
      fontIcon = <FontAwesomeIcon icon={faInstagram} size={size} />
      break;
    default:
      fontIcon = ''
  }

  return (
    <>{fontIcon}</>
  )

}
