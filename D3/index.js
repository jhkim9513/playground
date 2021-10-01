const data = [60, 30, 75, 100];
const color = ["red", "blue", "yellow", "green"];

d3.select("svg")
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("rx", 10)
  .attr("height", 60)
  .attr("y", (d, i) => i * 70)
  .attr("class", (d, i) => color[i])
  .attr("width", 10)
  .transition()
  .duration(1500)
  .attr("width", (d) => (d * 300) / 100);
