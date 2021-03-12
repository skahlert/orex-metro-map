import { maintenanceColor, brightLightBlue } from "./colors.js";
import {courses} from './individualCourses.js'

export const maintenanceEngPathTKs = [
  {...courses.sap_mms,
    position: { x: 1460, y: 810 },
    color: maintenanceColor,
    textPosition: "left",
  },
  {...courses.kiln_mtn,
    position: { x: 1380, y: 750 },
    color: maintenanceColor,
    textPosition: "left",
  },
  {
    ...courses.vrm_mtn,
    position: { x: 1380, y: 710 },
    color: brightLightBlue,
    textPosition: "left",
  },
  {
    ...courses.bm_rp,
    position: { x: 1380, y: 670 },
    color: brightLightBlue,
    textPosition: "left",
  },
  {
    ...courses.lub_hyd,
    position: { x: 1380, y: 630 },
    color: maintenanceColor,
    textPosition: "left",
  },
  {
    ...courses.gg_red,
    position: { x: 1380, y: 590 },
    color: brightLightBlue,
    textPosition: "left",
  },
  {
    ...courses.trans_dedusting,
    position: { x: 1380, y: 550 },
    color: maintenanceColor,
    textPosition: "left",
  },
  {
    ...courses.pmedp,
    position: { x: 1460, y: 430 },
    color: maintenanceColor,
    textPosition: "bottom",
  },
  {
    ...courses.mmdp,
    position: { x: 1460, y: 270 },
    color: brightLightBlue,
    textPosition: "right",
  }
];

export const electricalEngPathTKs = [
  {
    ...courses.auto_mtn,
    position: { x: 1540, y: 655 },
    color: maintenanceColor,
    textPosition: "right",
  },
  {
    ...courses.epd,
    position: { x: 1540, y: 600 },
    color: maintenanceColor,
    textPosition: "right",
  }
];
