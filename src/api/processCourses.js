import {
  productionColor,
  processColor,
  brightGreen,
  brightOrange,
  brightRed
} from "./colors.js";

import {courses} from './individualCourses.js'

export const processEngPathTKs = [
  {
    ...courses.ghf,
    position: { x: 1000, y: 840 },
    color: processColor,
    textPosition: "left",
  },
  {
    ...courses.grind1,
    position: { x: 1105, y: 775 },
    color: brightRed,
    textPosition: "left",
  },
  {
    ...courses.eda,
    position: { x: 1105, y: 815 },
    color: brightOrange,
    textPosition: "right",
  },
  {
    ...courses.therm1,
    position: { x: 1105, y: 735 },
    color: processColor,
    textPosition: "left",
  },
  {
    ...courses.rmx,
    position: { x: 1105, y: 695 },
    color: brightOrange,
    textPosition: "right",
  },
  {
    ...courses.sgsf,
    position: { x: 1105, y: 655 },
    color: brightRed,
    textPosition: "left",
  },
  {
    ...courses.grind2,
    position: { x: 990, y: 590 },
    color: brightRed,
    textPosition: "left",
  },
  {
    ...courses.therm2,
    position: { x: 990, y: 540 },
    color: brightRed,
    textPosition: "left",
  },
  {
    ...courses.emissions,
    position: { x: 990, y: 490 },
    color: processColor,
    textPosition: "left",
  },
  {
    ...courses.ppedp,
    position: { x: 990, y: 280 },
    color: processColor,
    textPosition: "northEast",
  },
  {
    ...courses.vrm_rp,
    position: { x: 990, y: 360 },
    color: brightRed,
    textPosition: "left",
  },
  {
    ...courses.pcontl_tunig,
    position: { x: 990, y: 320 },
    color: processColor,
    textPosition: "left",
  }
];

export const prodEngPathTKs = [
  {
    ...courses.sap_mms,
    position: { x: 1250, y: 540 },
    color: productionColor,
    textPosition: "left",
  },
  {
    ...courses.refrac,
    position: { x: 1250, y: 490 },
    color: brightGreen,
    textPosition: "left",
  },
  {
    ...courses.pmdp,
    position: { x: 1250, y: 270 },
    color: productionColor,
    textPosition: "right",
  }
];
