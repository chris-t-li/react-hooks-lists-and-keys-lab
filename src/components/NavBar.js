import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchorList = links.map(link => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })
  return <nav>{anchorList}</nav>;
}

export default NavBar;
