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


export function renderQuality(s,offset){
  //fork->raw mat
  s.path(`M420,${offset+7},L420,${offset+100}`)
    .attr({
      stroke: rawMaterialColor,
      strokeWidth: 6,
      strokeDasharray: "10,10",
      fill: "none",
      strokeLinejoin: "round"
    });

  // raw-mat path
  s.path(`M100,${offset+7}L423,${offset+7}`)
    .attr({
      stroke: rawMaterialColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  //fork QMgr
  s.path(`M1100,${offset},L1100,${offset+100}`)
    .attr({
      stroke: qualityColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  //fork QMgr-path
  s.path(`M1097,${offset+100}L1500,${offset+100}`)
    .attr({
      stroke: qualityColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  // main path
  s.path(`M100,${offset-2}L1150,${offset-2}`)
    .attr({
      stroke: qualityColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  TrainingKit(s, {
    name: "Quarry&Raw Materials",
    position: { x: 420, y: offset+100 },
    color: rawMaterialColor,
    textPosition: "bottom",
    stroke: "solid",
    optional: true,
    icon: null
  });
  InitiationProgram(s, {
    name: "Be Ready",
    position: { x: 100, y: offset },
    color: "#4a86e8ff",
    textPosition: "bottom",
    url: "https://drive.google.com/file/d/1ZTYKXexGnXfgDIT07DnUjZFhhl_1m0SB/view?usp=sharing"
  });

  [courses.quarry_des,courses.rmx,courses.prod_app,courses.process_env,courses.lab,courses.alt_raw,courses.eda].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*140+200, y: offset },
      color: qualityColor,
      textPosition: "bottom",
    });
  });

  PositionIcon(s, {
    name: ["Head of Lab"],
    position: { x: 1160, y: offset },
    color: qualityColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);
  [courses.qmdp].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*130+1300, y: offset+100 },
      color: qualityColor,
      textPosition: "bottom",
    });
  });
  PositionIcon(s, {
    name: "Quality Manager",
    position: { x: 1500, y: offset+100 },
    color: qualityColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);
}
