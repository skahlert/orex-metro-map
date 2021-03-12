import { brightOrange, qualityColor } from "./colors.js";
import {courses} from './individualCourses.js'

export const headOfLabTKs = [
  {
    ...courses.rmx,
    position: { x: 600, y: 700 },
    color: brightOrange,
    textPosition: "right",
  },

  {
    ...courses.quarry_des,
    position: { x: 600, y: 760 },
    color: brightOrange,
    textPosition: "right",
  },
  {
    ...courses.prod_app,
    position: { x: 680, y: 640 },
    color: brightOrange,
    textPosition: "right",
  },
  {
    ...courses.process_env,
    position: { x: 680, y: 600 },
    color: brightOrange,
    textPosition: "right",
  },
  {
    ...courses.lab,
    position: { x: 680, y: 560 },
    color: qualityColor,
    textPosition: "right",
  },
  {
    ...courses.alt_raw,
    position: { x: 680, y: 520 },
    color: brightOrange,
    textPosition: "right",
  },
  {
    ...courses.eda,
    position: { x: 680, y: 480 },
    color: brightOrange,
    textPosition: "right",
  },
  {
    ...courses.qmdp,
    position: { x: 790, y: 270 },
    color: brightOrange,
    textPosition: "right",
  }
];
