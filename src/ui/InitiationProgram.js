const settings = {
  "right":{
    anchor:"start",
    offsetX:35,
    offsetY:5,
  },
  "left":{
    anchor:"end",
    offsetX:-25,
    offsetY:5,
  },
  "bottom":{
    anchor:"middle",
    offsetX:0,
    offsetY:40,
  },
  "northEast":{
    anchor:"start",
    offsetX:20,
    offsetY:-20,
  },
  "southEast":{
    anchor:"start",
    offsetX:20,
    offsetY:20,
  }
}

export default function (s, item) {
  const { position, color, name } = item;
  const { x, y } = position;
  const tk = s.g();

  let outerAttrs = {
    fill: "#fff",
    stroke: color,
    strokeWidth: 5
  };
  if (item.stroke === "dashed") {
    outerAttrs.strokeDasharray = "10,3";
  }

  const tkOuter = s.circle(x, y, 25).attr(outerAttrs);

  const tkInner = s.circle(x, y, 15).attr({
    fill: item.optional ? "#fff" : color,
    stroke: "none"
    //strokeWidth: 10
  });
  const orientation = settings[item.textPosition];
  const description = s
    .text(x + orientation.offsetX, y + orientation.offsetY, name)
    .attr({ textAnchor: orientation.anchor, fontWeight: "bold",fontFamily:"sans-serif",'font-size': "0.7em"  });
  description.selectAll("tspan").forEach(function (tspan, i) {
    return tspan.attr({
      x: x + orientation.offsetX,
      y: y + orientation.offsetY - 5 + 14 * i
    });
  });
  tk.add(tkOuter, tkInner, description);

  tk.mouseover(function () {
    tkOuter.animate({ r: 30 }, 50);
    //document.getElementById("react-target").style.cursor = "pointer";
    //callback(item);
  })
    .mouseout(function () {
      tkOuter.animate({ r: 25 }, 50);
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
