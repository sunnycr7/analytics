import React from "react";
import HeaderLink from "./HeaderLink";

const LINKS = [
  {
    id: 1,
    name: "Home"
  },
  {
    id: 2,
    name: "Blog"
  },
  {
    id: 3,
    name: "News"
  },
  {
    id: 4,
    name: "Programs"
  },
  {
    id: 5,
    name: "Training"
  },
  {
    id: 6,
    name: "Help"
  }
];

class Middle extends React.Component {
  render() {
    return LINKS.map(link => {
      return (
        <HeaderLink name={link.name} key={link.id} className={link.class} />
      );
    });
  }
}

export default Middle;
