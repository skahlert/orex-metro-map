import { settings } from "../api/positionOffsets.js";

const icons = {
  computer:
    "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z",
  star:
    "M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
};

export default function (s, item, callback) {
  const { position, color, name } = item;
  const { x, y } = position;
  const tk = s.g();

  let outerAttrs = {
    fill: "#fff",
    stroke: color,

    strokeWidth: 3
  };
  if (item.stroke === "dashed") {
    outerAttrs.strokeDasharray = "10,3";
  }

  const tkOuter = s.circle(x, y, 15).attr(outerAttrs);
  const tkInner = s.circle(x, y, 11).attr({
    fill: item.optional ? "#fff" : color,
    stroke: "none"
    //strokeWidth: 10
  });
  const orientation = settings[item.textPosition];
  const description = s
    .text(x + orientation.offsetX, y + orientation.offsetY, name)
    .attr({ textAnchor: orientation.anchor,fontFamily:"sans-serif",'font-size': "0.7em"  });
  description.selectAll("tspan").forEach(function (tspan, i) {
    return tspan.attr({
      x: x + orientation.offsetX,
      y: y + orientation.offsetY - 5 + 14 * i
    });
  });
  tk.add(tkOuter, tkInner, description);
  if (item.icon) {
    const icon = s.path(icons[item.icon]);
    icon
      .transform("translate(" + (x - 7) + " " + (y - 7) + ") scale(0.6 0.6)")
      .attr({ fill: item.optional ? color : "#fff" });
    tk.add(icon);
  }
  tk.mouseover(function () {
    tkOuter.animate({ r: 20 }, 50);
    //document.getElementById("react-target").style.cursor = "pointer";
    //callback(item);
  })
    .mouseout(function () {
      tkOuter.animate({ r: 15 }, 50);
      //document.getElementById("react-target").style.cursor = "default";
      //callback({});
    })
    .click(function () {
      if (item.url) {
        window.open(item.url, "_blank");
      }
    });
  return tk;
}
