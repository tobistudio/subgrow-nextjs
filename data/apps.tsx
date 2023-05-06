import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTiktok, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {brands} from "../src/configs/colors/default";
import React from "react";

const currentApps = [
  {
    "id": 1,
    "added": 1,
    "name": "Facebook",
    "description": "Connect to facebook",
    "site_name": "facebook",
    // "icon": <FontAwesomeIcon icon={faFacebook} color={brands.facebook} size="2xl" />
    "icon": <FontAwesomeIcon icon={faFacebook} color={brands.facebook} size="2xl" />
  },
  {
    "id": 2,
    "added": 1,
    "name": "Twitter",
    "description": "Connect to facebook to display feeds",
    "site_name": "twitter",
    "icon": <FontAwesomeIcon icon={faTwitter} color={brands.twitter} size="2xl" />
  },
  {
    "id": 3,
    "added": 0,
    "name": "Instagram",
    "description": "Connect to Instagram to display a widget",
    "site_name": "instagram",
    "icon": <FontAwesomeIcon icon={faInstagram} color={brands.instagram} size="2xl" />
  },
  {
    "id": 4,
    "added": 1,
    "name": "Tik Tok",
    "description": "Connect to Tik Tok to display a widget",
    "site_name": "tiktok",
    "icon": <FontAwesomeIcon icon={faTiktok} color={brands.tiktok} size="2xl" />
  },
  {
    "id": 5,
    "added": 0,
    "name": "Tik Tok",
    "description": "Connect to Tik Tok to display a widget",
    "site_name": "tiktok",
    "icon": <FontAwesomeIcon icon={faTiktok} color={brands.tiktok} size="2xl" />
  }
]

export default currentApps
