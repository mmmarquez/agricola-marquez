<template>
  <section class="container">
    <!-- <div> -->
      <Navigation/>
      <Fabric />
      <div class="overlay">
        <h1>Agricola + Marquez</h1>
        <p>Rosemary Beach, FL
          <br>February 2018
        </p>
      </div>
      <transition name="fade">
      <div v-if="networkStatus" class="network--status" :class="['network',online ? 'online' : 'offline']">
        <span class="online--offline">
          {{ online ? 'online' : 'offline' }}
        </span>
        <div class="circle"></div>
      </div>
    </transition>
    <!-- </div> -->
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Navigation from '~/components/Navigation.vue';
import Fabric from '~/components/Fabric.vue';

export default {
  components: { Logo, Navigation, Fabric },
  data() {
    return {
      online: true,
      networkStatus: false
    };
  },
  created() {
    //do something after creating vue instance
    setTimeout(x => {
      this.networkStatus = true;
    }, 1000);
  },
  mounted() {
    // this.networkStatus = true;
    if (!window.navigator) {
      this.online = false;
      return;
    }
    this.online = Boolean(window.navigator.onLine);
    window.addEventListener('offline', this._toggleNetworkStatus);
    window.addEventListener('online', this._toggleNetworkStatus);
  },
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online';
    }
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus);
    window.removeEventListener('online', this._toggleNetworkStatus);
  }
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700');
/* Typography
–––––––––––––––––––––––––––––––––––––––––––––––––– */
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300; }
h1 { font-size: 4.0rem; line-height: 1;  letter-spacing: -.1rem;}
h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }
h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }
h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }
h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }
h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }

/* Larger than phablet */
@media (min-width: 550px) {
  h1 { font-size: 5.0rem; }
  h2 { font-size: 4.2rem; }
  h3 { font-size: 3.6rem; }
  h4 { font-size: 3.0rem; }
  h5 { font-size: 2.4rem; }
  h6 { font-size: 1.5rem; }
}

p {
  margin-top: 0; }


  a {
    text-decoration: none;
  }

  .container {
    height: 100vh;
    width: 100%;
    position: relative;
  }

  .network--status {
    position: fixed;
    bottom: 16px;
    right: 16px;
    left: 16px;
    z-index: 999999;
    display: flex;
    flex-flow: row;
    align-items: flex-end;
    justify-content: flex-end;
    max-width: 100%;
  }

.network--status {
  .online--offline { opacity: 0; transition: 1s opacity ease; }
  &:hover {
    .online--offline { opacity: 1; transition: 1s opacity ease; }
  }
}

  .overlay {
    position: absolute;
    top: 60%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  html {
    font-family: 'Playfair Display', serif;
    color: #00233E;
  }

  html {
  font-size: 62.5%; }
body {
  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */
  line-height: 1.6;
  font-weight: 400;
  color: #00233E;
}


//   body:before, body:after {
//     content: "";
//     position: fixed;
//     background: #00233E;
//     left: 0;
//     right: 0;
//     height: 10px;
// }
// body:before {
//     top: 0;
// }
// body:after {
//     bottom: 0;
// }
// body {
//     border-left: 10px solid #00233E;
//     border-right: 10px solid #00233E;
// }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  .network {
    font-weight: 400;
    font-size: 1rem;
    text-align: right;
  }

  .network .circle {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background: #4caf50;
    padding: .1rem .5rem;
    border-radius: 1rem;
    margin-left: 0.5rem;
  }

  .network.offline .circle {
    background: #f44336;
  }
</style>
