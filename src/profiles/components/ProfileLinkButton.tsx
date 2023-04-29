import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"



//  style={{width: 17, height: 17}}
// const ProfileLinkButton = ({ icon, size }) => {

// export default function LinkListCard({ link, setLinks }: any) {
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
    // code block
      fontIcon = <FontAwesomeIcon icon={faInstagram} size={size} />

  }

  return (
    <>{fontIcon}</>
  )


}

// export default ProfileLinkButton
