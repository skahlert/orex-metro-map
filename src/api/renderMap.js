import PositionIcon from "../ui/PositionIcon.js";
import TrainingKit from "../ui/TrainingKit.js";
import { engineers } from "../api/roles.js";
import {
  productionColor,
  processColor,
  maintenanceColor,
  qualityColor,
  rawMaterialColor,
  projectColor
} from "../api/colors.js";

import { headOfLabTKs } from "./qualityCourses.js";
import { rawMatTKs } from "./rawMaterialCourses.js";
import {
  maintenanceEngPathTKs,
  electricalEngPathTKs
} from "./maintenanceCourses.js";
import { prodEngPathTKs, processEngPathTKs } from "./processCourses.js";
import { legendIcons } from "./legendIcons.js";
import { projectPathTKs } from "./projectCourses.js";

export const renderMap = (s) => {
  s.attr({ viewBox: "220 0 1680 1000" });
  // Background:
  s.rect(0, 0, 2000, 1000).attr({ fill: "#eee" });

  const quarryPath1 = s
    .path("M980,950L980,870,595,870,595,670,460,670,460,170")
    .attr({
      stroke: rawMaterialColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  const quarryPath2 = s.path("M460,570L360,570,360,380").attr({
    stroke: rawMaterialColor,
    strokeWidth: 6,
    fill: "none",
    strokeLinejoin: "round"
  });
  const quarryPath3 = s.path("M460,570L570,570,570,380").attr({
    stroke: rawMaterialColor,
    strokeWidth: 6,
    fill: "none",
    strokeLinejoin: "round"
  });
  const qualityPath1 = s
    .path("M990,950L990,860,605,860,605,670,680,670,680,430")
    .attr({
      stroke: qualityColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  const qualityPath2 = s.path("M680,450L790,450,790,180").attr({
    stroke: qualityColor,
    strokeWidth: 6,
    fill: "none",
    strokeLinejoin: "round"
  });
  const processPath = s
    .path("M1000,950L1000,815,1100,815,1100,620,990,620,990,230")
    .attr({
      stroke: processColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  const productionPath = s
    .path("M1010,950L1010,870,1110,870,1110,620,1250,620,1250,230")
    .attr({
      stroke: productionColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  const maintenancePath = s
    .path(
      "M1020,950L1020,880,1460,880,1460,780,1380,780,1380,430,1460,430,1460,230"
    )
    .attr({
      stroke: maintenanceColor,
      strokeWidth: 6,
      fill: "none",
      strokeLinejoin: "round"
    });
  const maintenancePath2 = s.path("M1460,780,1540,780,1540,300,1460,300").attr({
    stroke: maintenanceColor,
    strokeWidth: 6,
    fill: "none",
    strokeLinejoin: "round"
  });
  const maintenancePath3 = s.path("M1380,430L1380,300,1460,300").attr({
    stroke: maintenanceColor,
    strokeWidth: 6,
    fill: "none",
    strokeLinejoin: "round"
  });
  const projectPath = s.path("M1700,430L1700,230").attr({
    stroke: projectColor,
    strokeWidth: 6,
    fill: "none",
    strokeLinejoin: "round"
  });
  const projectPath2 = s.path("M1700,180L1460,180").attr({
    stroke: projectColor,
    strokeWidth: 1,
    fill: "none",
    strokeLinejoin: "round",
    strokeDasharray: "10,10"
  });
  const projectPath3 = s.path("M1700,340L1460,180").attr({
    stroke: projectColor,
    strokeWidth: 1,
    fill: "none",
    strokeLinejoin: "round",
    strokeDasharray: "10,10"
  });

  s.g(
    quarryPath1,
    quarryPath2,
    quarryPath3,
    processPath,
    qualityPath1,
    qualityPath2,
    productionPath,
    maintenancePath,
    maintenancePath,
    maintenancePath2,
    maintenancePath3,
    projectPath,
    projectPath2,
    projectPath3
  );

  jobMove(s, 990, 180, 225, 90, processColor);
  jobMove(s, 1250, 180, -225, 100, productionColor);
  jobMove(s, 790, 180, 170, 100, qualityColor);
  jobMove(s, 680, 380, 75, -110, qualityColor);
  jobMove(s, 570, 380, -75, 90, rawMaterialColor);
  jobMove(s, 1380, 520, 290, -80, maintenanceColor);
  jobMove(s, 1540, 520, 130, -80, maintenanceColor);

  const beReadyOuter = s.circle(1000, 950, 25).attr({
    fill: "#fff",
    stroke: "#4a86e8ff",
    strokeWidth: 5
  });
  const beReadyInner = s.circle(1000, 950, 15).attr({
    fill: "#fff",
    stroke: "#4a86e8ff",
    strokeWidth: 10
  });
  const beReady = s.g();
  beReady.add(beReadyOuter, beReadyInner);
  beReady
    .mouseover(function () {
      beReadyOuter.animate({ r: 30 }, 50);
    })
    .mouseout(function () {
      beReadyOuter.animate({ r: 25 }, 50);
    });

  processEngPathTKs.forEach((item) => {
    TrainingKit(s, item);
  });
  headOfLabTKs.forEach((item) => {
    TrainingKit(s, item);
  });
  rawMatTKs.forEach((item) => {
    TrainingKit(s, item);
  });
  prodEngPathTKs.forEach((item) => {
    TrainingKit(s, item);
  });
  maintenanceEngPathTKs.forEach((item) => {
    TrainingKit(s, item);
  });
  electricalEngPathTKs.forEach((item) => {
    TrainingKit(s, item);
  });
  projectPathTKs.forEach((item) => {
    TrainingKit(s, item);
  });
  engineers.forEach((item) => {
    PositionIcon(s, item);
  });

  legend(s);

  //const jobMove1 = s.path("M990,180s150 -20,150,90c0,90,110,90,110,90").attr({stroke:maintenanceColor,strokeWidth:6,fill:"none",strokeLinejoin:"round"});

  //M0,0c79,0,130,45,130,45s47,45,130,45
  //`M${startX},${startY}c${width} ${0},${width/2} ${0},${width/2} ${height}s${0} ${height},${width} ${height}
  //M990,180c150 0,75 0,75 90s0 90 150 90
};

const legend = (s) => {
  legendIcons.forEach((item) => {
    TrainingKit(s, item);
  });
  jobMove(s, 240, 980, 160, 0, "black");
  s.text(430, 983, "Lateral move");
};

const jobMove = (s, startX, startY, width, height, color, withArrow = true) => {
  const bendFactor = 0.3;
  const start = `${startX},${startY}`;
  const c1 = `${width * bendFactor} ${0}`;
  const mid = `${width / 2} ${height / 2}`;
  const c3 = `${width / 2} ${height / 2}`;
  const s1 = `${width * (0.5 - bendFactor)} ${height / 2}`;
  const end = `${width / 2} ${height / 2}`;
  if (withArrow) {
    if (width > 0) {
      s.path(`M${startX + width},${startY + height + 5}l20 -5,-20 -5,0 5`).attr(
        {
          fill: color
        }
      );
    } else {
      s.path(`M${startX + width},${startY + height + 5}l-20 -5,20 -5,0 5`).attr(
        {
          fill: color
        }
      );
    }
  }

  return s.path(`M${start}c${c1},${mid},${c3}s${s1},${end}`).attr({
    stroke: color,
    strokeWidth: 3,
    strokeDasharray: "10,10",
    fill: "none",
    strokeLinejoin: "round"
  });
};
