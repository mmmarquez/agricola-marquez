<template>
  <div id="blob">
    <svg id="organic-blob" xmlns="http://www.w3.org/2000/svg" filter="url(#goo)">
      <defs>
        <filter id="goo">
          <!-- tympanus.net/codrops/creative-gooey-effects -->
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
        </filter>
      </defs>
      <clipPath id="mask">
            <circle id="Circle1" stroke="#979797"></circle>
            <circle id="Circle2" stroke="#979797"></circle>
            <circle id="Circle3" stroke="#979797"></circle>
            <circle id="Circle4" stroke="#979797"></circle>
      </clipPath>
    </svg>
  </div>
</template>


<svg width="124px" height="124px" viewBox="0 0 124 124" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 45.2 (43514) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle id="Oval" stroke="#979797" fill="#D8D8D8" cx="62" cy="62" r="61"></circle>
    </g>
</svg>
<style lang="scss">
#mask {
  transform: scale(7) !important;
}

img {
  height: 600px;
  display: block;
  -webkit-clip-path: url(#mask);
  clip-path: url(#mask);
}

#blob {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: url('https://unsplash.it/1600/900/?random');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: url(#mask);
  opacity: 0.4;
  position: fixed;
  top: 0;
  right:0;
  left:0;
  bottom:0;


}
svg,
svg circle {
  fill: royalblue;
  width: 100%;
}
@-webkit-keyframes from0to360 {
  from {
            transform: rotate(0);
  }
  to {
            transform: rotate(360deg);
  }
}
@keyframes from0to360 {
  from {
            transform: rotate(0);
  }
  to {
            transform: rotate(360deg);
  }
}
#Circle1 {
          animation: from0to360 3s linear infinite;
  cx: 150;
  cy: 145;
  r: 100;
          transform-origin: 145px 150px;
}
@-webkit-keyframes from360to0 {
  from {
            transform: rotate(360deg);
  }
  to {
            transform: rotate(0deg);
  }
}
@keyframes from360to0 {
  from {
            transform: rotate(360deg);
  }
  to {
            transform: rotate(0deg);
  }
}
#Circle2 {
          animation: from360to0 4s linear infinite;
  cx: 150;
  cy: 155;
  r: 100;
          transform-origin: 155px 150px;
}
#Circle3 {
          animation: from0to360 5s linear infinite;
  cx: 145;
  cy: 150;
  r: 100;
          transform-origin: 150px 145px;
}
#Circle4 {
          animation: from360to0 4.5s linear infinite;
  cx: 155;
  cy: 150;
  r: 100;
          transform-origin: 150px 155px;
}

</style>
