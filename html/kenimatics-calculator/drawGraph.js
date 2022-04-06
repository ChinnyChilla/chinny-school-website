var graph = document.getElementById('graph')
var ctx = graph.getContext("2d");


function checks() {
	return true
}

function generateGraph() {

	if (!checks()) return alert("Please pass the checks first :)")
	var graph = document.getElementById('graph')
	var ctx = graph.getContext("2d");
	onlyY = !document.getElementById('solve-x-axis').checked
	if (onlyY) {
		ctx.beginPath();
		ctx.arc(graph.width/2, graph.height * 0.2, graph.height * 0.01, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();
	}
	var graph_left = graph.width * 0.10
	var graph_right = (graph.width * 0.9) % 30 + (graph.width * 0.9) - 9
	var graph_top = graph.height * 0.10
	var graph_bottom = (graph.height * 0.9) % 30 + (graph.height * 0.9) - 19
	console.log(graph_bottom)
	//draw graph box
	ctx.beginPath();
	ctx.moveTo(graph_left, graph_top)
	ctx.lineTo(graph_left, graph_bottom)
	ctx.lineTo(graph_right, graph_bottom)
	ctx.lineTo(graph_right, graph_top)
	ctx.lineTo(graph_left, graph_top)
	ctx.fillStyle = '#DDD'
	ctx.fill()
	var graphLineSpacing = 30
	for (i=graph_top; i<graph_bottom; i+=graphLineSpacing) {
		ctx.beginPath();
		ctx.moveTo(graph_left, i)
		ctx.lineTo(graph_right, i)
		ctx.stroke()
	}
	for (i=graph_left; i<graph_right; i+=graphLineSpacing) {
		ctx.beginPath();
		ctx.moveTo(i, graph_top)
		ctx.lineTo(i, graph_bottom)
		ctx.stroke()
	}
}
