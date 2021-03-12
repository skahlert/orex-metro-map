import "./styles.css";
import Snap from "snapsvg-cjs";
import svgPanZoom from "svg-pan-zoom";
import { courses } from './api/individualCourses.js'
import InitiationProgram from "./ui/InitiationProgram.js";
import PositionIcon from "./ui/PositionIcon.js";
import TrainingKit from "./ui/TrainingKit.js";



import { engineers } from "./api/roles.js";


import {renderProcess} from "./ui/ProcessPath.js";
import {renderProduction} from "./ui/ProductionPath.js";
import {renderQuality} from "./ui/QualityPath.js";
import {renderMaintenance} from "./ui/MaintenancePath.js";
import {renderQuarry} from "./ui/QuarryPath.js";
import {svgAsPngUri} from "save-svg-as-png"


const renderSvg = (addZoomTools) => {
  const s = Snap(".svg");
  s.defs.innerHTML = '<style type="text/css">@font-face {font-family: "Avenir"; src: url("data:application/octet-stream;base64,AAEAAAARAQAABAA Long text blablabla");}</style>';
  s.attr({ viewBox: "0 0 1600 1100" });
  //s.rect(0, 0, 1600, 1100).attr({ fill: "#eee" });
  renderProcess(s,100)
  renderProduction(s,200)
  renderQuality(s,300)
  renderMaintenance(s,590)
  renderQuarry(s,880)
  const svg = document.getElementById("svg");
  const img = document.getElementById("img");
  svgAsPngUri(document.getElementById("svg")).then(uri => img.setAttribute("src", uri));;
};

window.addEventListener("DOMContentLoaded", ()=>(renderSvg(true)));
//renderSvg(false);
