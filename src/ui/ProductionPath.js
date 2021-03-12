import {
  productionColor,
  processColor,
  maintenanceColor,
  qualityColor,
  rawMaterialColor,
  projectColor
} from "../api/colors.js";
import { engineers } from "../api/roles.js";
import { courses } from '../api/individualCourses.js'
import InitiationProgram from "../ui/InitiationProgram.js";
import PositionIcon from "../ui/PositionIcon.js";
import TrainingKit from "../ui/TrainingKit.js";


export function renderProduction(s,offset){

  //main path
  s.path(`M747,${offset-2}L1500,${offset-2}`)
      .attr({
        stroke: productionColor,
        strokeWidth: 6,
        fill: "none",
        strokeLinejoin: "round"
      });

  [courses.sap_mms,courses.refrac].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*130+850, y: offset },
      color: productionColor,
      textPosition: "bottom",
    });
  });
  PositionIcon(s, {
    name: ["Process/Env","Engineer"],
    position: { x: 1100, y: offset },
    color: productionColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);
  [courses.pmdp].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*130+1300, y: offset },
      color: productionColor,
      textPosition: "bottom",
    });
  });
  PositionIcon(s, {
    name: "Production Manager",
    position: { x: 1500, y: offset },
    color: productionColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);
}
