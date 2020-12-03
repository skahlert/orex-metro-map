import { lightGray } from "./colors.js";

const startpos = { x: 250, y: 870 };
const distance = { x: 180, y: 40 };
const coords = (x, y) => ({
  x: startpos.x + distance.x * x,
  y: startpos.y + distance.y * y
});

export const legendIcons = [
  {
    name: "Training Kit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    position: coords(0, 0),
    color: "black",
    textPosition: "right",
    stroke: "solid",
    optional: false,
    icon: null,
    url: null
  },
  {
    name: "Optional Program",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    position: coords(0, 1),
    color: "black",
    textPosition: "right",
    stroke: "solid",
    optional: true,
    icon: null,
    url: null
  },
  {
    name: "Currently in development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    position: coords(0, 2),
    color: "black",
    textPosition: "right",
    stroke: "dashed",
    optional: true,
    icon: null,
    url: null
  },
  {
    name: "Online Course available",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    position: coords(1, 0),
    color: "black",
    textPosition: "right",
    stroke: "solid",
    optional: false,
    icon: "computer",
    url: null
  },
  {
    name: "Certification/Credential",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    position: coords(1, 1),
    color: "black",
    textPosition: "right",
    stroke: "solid",
    optional: false,
    icon: "star",
    url: null
  },
  {
    name: "(currently) Not available",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    position: coords(1, 2),
    color: lightGray,
    textPosition: "right",
    stroke: "solid",
    optional: false,
    icon: null,
    url: null
  }
];
