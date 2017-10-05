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

.fabric {
  // border: 10px solid red;
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
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeCanvas(canvas), false);
    document.removeEventListener('load', this.resizeCanvas(canvas), false);
  },
  mounted() {
    const canvas = new fabric.Canvas('c');
    this.getRandomArbitrary(0, 300);
    this.resizeCanvas(canvas);

    window.addEventListener('resize', this.resizeCanvas(canvas), false);
    document.addEventListener('load', this.resizeCanvas(canvas), false);

    fabric.Object.prototype.transparentCorners = true;

    fabric.Image.fromURL('/shell.png', img => {
      canvas.add(
        img
          .set({
            top: this.getRandomArbitrary(0, window.innerHeight),
            left: this.getRandomArbitrary(0, window.innerWidth),
            angle: 75
          })
          .scale(0.7)
      );
    });

    fabric.Image.fromURL('/sand.png', img => {
      canvas.add(
        img
          .set({
            top: this.getRandomArbitrary(0, window.innerHeight),
            left: this.getRandomArbitrary(0, window.innerWidth),
            angle: 30
          })
          .scale(0.5)
      );
    });

    fabric.Image.fromURL('/water.png', img => {
      canvas.add(
        img
          .set({
            top: this.getRandomArbitrary(0, window.innerHeight),
            left: this.getRandomArbitrary(0, window.innerWidth),
            angle: 30
          })
          .scale(0.6)
      );
    });

    fabric.Image.fromURL('/watermelon.png', img => {
      canvas.add(
        img
          .set({
            top: this.getRandomArbitrary(0, window.innerHeight),
            left: this.getRandomArbitrary(0, window.innerWidth),
            angle: 110
          })
          .scale(0.25)
      );
    });

    this.$nextTick(x => {
      this.resizeCanvas(canvas);
    });
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },
    resizeCanvas(canvas) {
      canvas.setHeight(window.innerHeight);
      canvas.setWidth(window.innerWidth);
      canvas.renderAll();
    }
  }
};
</script>
