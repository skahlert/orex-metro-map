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


export function renderMaintenance(s,offset){

  // mechanical path
  s.path(`M100,${offset}L280,${offset},280,${offset-90},1250,${offset-90},1250,${offset}`)
    .attr({
      stroke: maintenanceColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  //electrical-path
  s.path(`M100,${offset}L280,${offset},280,${offset+90},1250,${offset+90},1250,${offset}`)
    .attr({
      stroke: maintenanceColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  //preventive-path
  s.path(`M1020,${offset-90}L1020,${offset},1020,${offset},1500,${offset}`)
    .attr({
      stroke: maintenanceColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  TrainingKit(s, {
    ...courses.sap_mms,
    position: { x: 200, y: offset },
    color: maintenanceColor,
    textPosition: "bottom",
  });



  InitiationProgram(s, {
    name: "Be Ready",
    position: { x: 100, y: offset },
    color: "#4a86e8ff",
    textPosition: "bottom",
    url: "https://drive.google.com/file/d/1ZTYKXexGnXfgDIT07DnUjZFhhl_1m0SB/view?usp=sharing"
  });

  [courses.kiln_mtn,courses.vrm_mtn,courses.bm_rp,courses.lub_hyd,courses.gg_red,courses.trans_dedusting].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*125+350, y: offset-90 },
      color: maintenanceColor,
      textPosition: "bottom",
    });
  });

  [courses.auto_mtn,courses.epd].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*180+450, y: offset+90 },
      color: maintenanceColor,
      textPosition: "bottom",
    });
  });
  [courses.pmedp,courses.mmdp].forEach((item,index) => {
    TrainingKit(s, {
      ...item,
      position: { x: (index)*280+1060, y: offset},
      color: maintenanceColor,
      textPosition: "bottom",
    });
  });
  PositionIcon(s, {
    name: ["Mechanical","Maintenance"],
    position: { x: 1180, y: offset-90 },
    color: maintenanceColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);
  PositionIcon(s, {
    name: ["Preventive","Maintenance"],
    position: { x: 1180, y: offset },
    color: maintenanceColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);
  PositionIcon(s, {
    name: ["Electrical","Maintenance"],
    position: { x: 1180, y: offset+90 },
    color: maintenanceColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);

  PositionIcon(s, {
    name: "Maintenance Manager",
    position: { x: 1500, y: offset },
    color: maintenanceColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },false);
}
