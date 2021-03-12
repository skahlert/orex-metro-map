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


export function renderProcess(s,offset){
  //production Fork
  //branch-path->prod
  s.path(`M750,${offset+6},L750,${offset+100}`)
    .attr({
      stroke: productionColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  //secondary path
  s.path(`M100,${offset+6}L753,${offset+6}`)
    .attr({
      stroke: productionColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  //main path
  s.path(`M100,${offset-2}L1500,${offset-2}`)
      .attr({
        stroke: processColor,
        strokeWidth: 6,
        fill: "none",
        strokeLinejoin: "round"
      });

  [courses.ghf,courses.eda,courses.grind1,courses.therm1,courses.rmx,courses.sgsf].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*100+200, y: offset },
      color: processColor,
      textPosition: "bottom",
    });
  });



  InitiationProgram(s, {
    name: "Be Ready",
    position: { x: 100, y: offset },
    color: "#4a86e8ff",
    textPosition: "bottom",
    url: "https://drive.google.com/file/d/1ZTYKXexGnXfgDIT07DnUjZFhhl_1m0SB/view?usp=sharing"
  });
  [courses.grind2,courses.therm2,courses.emissions].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*100+800, y: offset },
      color: processColor,
      textPosition: "bottom",
    });
  });
  [courses.vrm_rp,courses.pcontl_tunig,courses.ppedp].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*100+1200, y: offset },
      color: processColor,
      textPosition: "bottom",
    });
  });
  PositionIcon(s, {
    name: ["Process/Env","Engineer"],
    position: { x: 1100, y: offset },
    color: processColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);
  PositionIcon(s, {
    name: "Process Manager",
    position: { x: 1500, y: offset },
    color: processColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);

}
