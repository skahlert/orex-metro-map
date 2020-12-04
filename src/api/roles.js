import {
  productionColor,
  processColor,
  maintenanceColor,
  qualityColor,
  rawMaterialColor,
  projectColor
} from "./colors.js";

export const engineers = [
  {
    name: "Supervisor(s)",
    position: { x: 570, y: 380 },
    color: rawMaterialColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: ["Quarry Mining Eng.", "Quarry Geologist"],
    position: { x: 460, y: 380 },
    color: rawMaterialColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: "Quarry Planner",
    position: { x: 360, y: 380 },
    color: rawMaterialColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: ["Quarry & Raw Materials", "Manager"],
    position: { x: 460, y: 180 },
    color: rawMaterialColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: "Head of Lab",
    position: { x: 680, y: 380 },
    color: qualityColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: "Quality Manager",
    position: { x: 790, y: 180 },
    color: qualityColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: "Process/Env Engineer",
    position: { x: 990, y: 410 },
    color: processColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: "Process Manager",
    position: { x: 990, y: 180 },
    color: processColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: "Production Coach",
    position: { x: 1250, y: 390 },
    color: productionColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: "Production Manager",
    position: { x: 1250, y: 180 },
    color: productionColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: ["Preventive", "Maintenance"],
    position: { x: 1460, y: 340 },
    color: maintenanceColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: ["Mechanical", "Maintenance"],
    position: { x: 1380, y: 360 },
    color: maintenanceColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: ["Electrical", "Maintenance"],
    position: { x: 1540, y: 360 },
    color: maintenanceColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: "Maintenance Manager",
    position: { x: 1460, y: 180 },
    color: maintenanceColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: "Project Manager",
    position: { x: 1700, y: 180 },
    color: projectColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  },
  {
    name: ["Project", "Engineer"],
    position: { x: 1700, y: 340 },
    color: projectColor,
    textPosition: "bottom",
    stroke: "solid",
    icon: null
  }
];
