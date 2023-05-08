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

/*
{sites.map((site) => (
                    <div key={site.id} >
                      {profileTheme.options.links.type === "link" ? (
                        <Link href={site.url} target="_blank" className={profileTheme.options.links.className}>
                          {site.title}
                        </Link>
                      ) : (
                        <Button
                          href={site.url}
                          sx={{
                            // maxWidth: 600,
                            // width: "100%",
                            // xs: {
                            //   maxWidth: 600,
                            //   width: 400
                            // },
                            // xl: {
                            //   // maxWidth: 600,
                            //   width: 800
                            // }
                          }} // perhaps we should not let user control
                          target="_blank"
                          // variant={profileTheme.buttonStyle ? profileTheme.buttonStyle : "outlined"}
                          variant={profileTheme.options.links.variant ? profileTheme.options.links.variant : "outlined"}
                          className={profileTheme.options.links.className}
                          // startIcon={site.icon ? <FontAwesomeIcon icon={site.icon} size="lg" style={{ width: 17, height: 17 }} /> : ''}
                          startIcon={<ProfileLinkButton size={"xl"} icon={site.icon} />}
                        >
                          {site.title}
                        </Button>
                      )}
                    </div>
                  ))}
 */
