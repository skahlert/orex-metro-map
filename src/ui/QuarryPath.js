import {
  productionColor,
  processColor,
  qualityColor,
  rawMaterialColor,
  projectColor
} from "../api/colors.js";
import { engineers } from "../api/roles.js";
import { courses } from '../api/individualCourses.js'
import InitiationProgram from "../ui/InitiationProgram.js";
import PositionIcon from "../ui/PositionIcon.js";
import TrainingKit from "../ui/TrainingKit.js";


export function renderQuarry(s,offset){

  // mechanical path
  s.path(`M100,${offset}L710,${offset},710,${offset-90},980,${offset-90}`)
    .attr({
      stroke: rawMaterialColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  //electrical-path
  s.path(`M100,${offset}L710,${offset},710,${offset+90},980,${offset+90}`)
    .attr({
      stroke: rawMaterialColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  //preventive-path
  s.path(`M710,${offset}L1500,${offset}`)
    .attr({
      stroke: rawMaterialColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  [courses.quarry_des,courses.rmx,courses.min_ops].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*170+240, y: offset },
      color: rawMaterialColor,
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

  [courses.dep_eval].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*125+830, y: offset-90 },
      color: rawMaterialColor,
      textPosition: "bottom",
    });
  });

  [courses.comp_prg,courses.qrmdp].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*450+830, y: offset },
      color: rawMaterialColor,
      textPosition: "bottom",
    });
  });
  [courses.trans_dedusting].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*280+830, y: offset+90},
      color: rawMaterialColor,
      textPosition: "bottom",
    });
  });
  PositionIcon(s, {
    name: ["Quarry","Planner"],
    position: { x: 980, y: offset-90 },
    color: rawMaterialColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);
  PositionIcon(s, {
    name: ["Quarry Mining Eng.","Quarry Geologist"],
    position: { x: 980, y: offset },
    color: rawMaterialColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);
  PositionIcon(s, {
    name: ["Supervisor(s)"],
    position: { x: 980, y: offset+90 },
    color: rawMaterialColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);

  PositionIcon(s, {
    name: ["Quarry & Raw Materials"," Manager"],
    position: { x: 1500, y: offset },
    color: rawMaterialColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);
}
