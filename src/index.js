import "./styles.css";
import Snap from "snapsvg-cjs";
import svgPanZoom from "svg-pan-zoom";
import { renderMap } from "./api/renderMap.js";

const renderSvg = () => {
  const s = Snap(".svg");
  renderMap(s);
  const zoomMap = svgPanZoom(".svg", {
    //viewportSelector: ".svg-pan-zoom_viewport",
    panEnabled: true,
    controlIconsEnabled: false,
    zoomEnabled: true,
    dblClickZoomEnabled: true,
    mouseWheelZoomEnabled: true,
    preventMouseEventsDefault: true,
    zoomScaleSensitivity: 0.2,
    minZoom: 0.8,
    maxZoom: 2,
    fit: true,
    contain: false,
    center: true,
    refreshRate: "auto",
    beforeZoom: function () {},
    onZoom: function () {},
    beforePan: function () {},
    onPan: function () {},
    onUpdatedCTM: function () {},
    eventsListenerElement: null
  });
  zoomMap.enableControlIcons();
  window.onresize = () => {
    zoomMap.resize();
    zoomMap.fit();
    zoomMap.center();
  };
};

//window.addEventListener("DOMContentLoaded", renderSvg);
renderSvg();
