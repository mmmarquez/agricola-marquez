<template>
  <div class="fabric">
    <canvas id="c"></canvas>

  </div>
</template>

<style lang="scss">

canvas {
position: fixed;
top: 0;
left: 0;
right: 0;
bottom:0;
// z-index: -1;
}


</style>

<script>
export default {
	data() {
		return {
			data: true
		};
	},
	computed: {},
	mounted() {
		// var canvas = new fabric.Canvas("c");

		// create a rectangle object
		// var rect = new fabric.Rect({
		// 	left: 100,
		// 	top: 100,
		// 	fill: "red",
		// 	width: 20,
		// 	height: 20
		// });

		// "add" rectangle onto canvas
		// canvas.add(rect);

		function getRandomArbitrary(min, max) {
			return Math.random() * (max - min) + min;
		}

		getRandomArbitrary(0, 300);
		(function() {
			function add() {
				var red = new fabric.Rect({
					top: 100,
					left: 0,
					width: 80,
					height: 50,
					fill: "#00233E"
				});
				var blue = new fabric.Rect({
					top: 0,
					left: 100,
					width: 100,
					height: 70,
					fill: "#00233E"
				});
				var green = new fabric.Rect({
					top: 100,
					left: 100,
					width: 60,
					height: 60,
					fill: "#00233E"
				});
				canvas.add(red, blue, green);
			}

			var $ = function(id) {
				return new fabric.Canvas("c");
			};

			var canvas = new fabric.Canvas("c");

			window.addEventListener("resize", resizeCanvas, false);
			function resizeCanvas() {
				canvas.setHeight(window.innerHeight);
				canvas.setWidth(window.innerWidth);
				canvas.renderAll();
			}

			// resize on init
			resizeCanvas();

			var red = new fabric.Rect({
				top: getRandomArbitrary(0, window.innerHeight),
				left: getRandomArbitrary(0, window.innerWidth),
				width: getRandomArbitrary(0, window.innerWidth / 4),
				height: getRandomArbitrary(0, window.innerWidth / 2),
				fill: "#00233E"
			});
			var blue = new fabric.Rect({
				top: getRandomArbitrary(0, window.innerHeight),
				left: getRandomArbitrary(0, window.innerWidth),
				width: getRandomArbitrary(0, window.innerWidth / 4),
				height: getRandomArbitrary(0, window.innerWidth / 2),
				fill: "#00233E"
			});
			var green = new fabric.Rect({
				top: getRandomArbitrary(0, window.innerHeight),
				left: getRandomArbitrary(0, window.innerWidth),
				width: getRandomArbitrary(0, window.innerWidth / 4),
				height: getRandomArbitrary(0, window.innerWidth / 2),
				fill: "#00233E"
			});
			var black = new fabric.Rect({
				top: getRandomArbitrary(0, window.innerHeight),
				left: getRandomArbitrary(0, window.innerHeight),
				width: getRandomArbitrary(0, window.innerWidth / 4),
				height: getRandomArbitrary(0, window.innerWidth / 2),
				fill: "#00233E"
			});
			var circleOne = new fabric.Circle({
				top: 140,
				left: 230,
				radius: 75,
				fill: "#00233E"
			});
			var circleTwo = new fabric.Circle({
				top: 140,
				left: 230,
				radius: 75,
				fill: "#00233E"
			});

			fabric.Object.prototype.transparentCorners = true;

			fabric.Image.fromURL("/shell.png", function(img) {
				canvas.add(
					img
						.set({
							top: getRandomArbitrary(0, window.innerHeight),
							left: getRandomArbitrary(0, window.innerWidth),
							angle: 75
						})
						.scale(0.7)
				);
			});

			fabric.Image.fromURL("/sand.png", function(img) {
				canvas.add(
					img
						.set({
							top: getRandomArbitrary(0, window.innerHeight),
							left: getRandomArbitrary(0, window.innerWidth),
							angle: 30
						})
						.scale(0.5)
				);
			});

			fabric.Image.fromURL("/water.png", function(img) {
				canvas.add(
					img
						.set({
							top: getRandomArbitrary(0, window.innerHeight),
							left: getRandomArbitrary(0, window.innerWidth),
							angle: 30
						})
						.scale(0.6)
				);
			});

			fabric.Image.fromURL("/watermelon.png", function(img) {
				canvas.add(
					img
						.set({
							top: getRandomArbitrary(0, window.innerHeight),
							left: getRandomArbitrary(0, window.innerWidth),
							angle: 110
						})
						.scale(0.25)
				);
			});

			// canvas.add(red, blue, green, black, circleOne, circleTwo);
			var group = $("group"),
				ungroup = $("ungroup"),
				multiselect = $("multiselect"),
				addmore = $("addmore"),
				discard = $("discard");

			addmore.onclick = add;

			multiselect.onclick = function() {
				canvas.discardActiveObject();
				var sel = new fabric.ActiveSelection(canvas.getObjects(), {
					canvas: canvas
				});
				canvas.setActiveObject(sel);
				canvas.requestRenderAll();
			};

			group.onclick = function() {
				if (!canvas.getActiveObject()) {
					return;
				}
				if (canvas.getActiveObject().type !== "activeSelection") {
					return;
				}
				canvas.getActiveObject().toGroup();
				canvas.requestRenderAll();
			};

			ungroup.onclick = function() {
				if (!canvas.getActiveObject()) {
					return;
				}
				if (canvas.getActiveObject().type !== "group") {
					return;
				}
				canvas.getActiveObject().toActiveSelection();
				canvas.requestRenderAll();
			};

			discard.onclick = function() {
				canvas.discardActiveObject();
				canvas.requestRenderAll();
			};
		})();
	},
	methods: {},
	destroyed() {}
};
</script>
