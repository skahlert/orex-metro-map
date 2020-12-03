import { settings } from "../api/positionOffsets.js";
const icons = {
  person:
    "M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
};

export default function (s, item) {
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
  const icon = s.path(icons.person);
  icon
    .transform("translate(" + (x - 20) + " " + (y - 22) + ") scale(1.7 1.7)")
    .attr({ fill: color });

  const tkOuter = s.circle(x, y, 25).attr(outerAttrs);

  const orientation = settings[item.textPosition];
  let backgroundHeight = Array.isArray(name) ? 15 * name.length : 18;

  const background = s
    .rect(
      x + orientation.offsetX - 10,
      y + orientation.offsetY - 12,
      20,
      backgroundHeight
    )
    .attr({ fill: "#eee" });

  const description = s
    .text(x + orientation.offsetX, y + orientation.offsetY, name)
    .attr({ textAnchor: orientation.anchor, fontWeight: "bold" });

  description.selectAll("tspan").forEach(function (tspan, i) {
    return tspan.attr({
      x: x + orientation.offsetX,
      y: y + orientation.offsetY + 14 * i
    });
  });
  tk.add(tkOuter, icon, background, description);
  //tk.mouseover(function(){tkOuter.animate({r: 20}, 50)}).mouseout(function(){tkOuter.animate({r: 15}, 50)});
  return tk;
}
