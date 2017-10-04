<template>
  <section class="container">
    <div>
      <Navigation/>
      <Fabric />
      <div class="overlay">
        <h1>Agricola + Marquez</h1>
        <p>00.00.00
          <br>
          Rosemary Beach, FL</p>
      </div>
      <!-- <div :class="['network',online ? 'online' : 'offline']">
        <div class="circle"></div>
        {{ online ? 'online' : 'offline' }}
      </div> -->
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Blob from "~/components/Blob.vue";
import Navigation from "~/components/Navigation.vue";
import Fabric from "~/components/Fabric.vue";

export default {
	components: { Logo, Blob, Navigation, Fabric },
	data() {
		return {
			online: true
		};
	},
	mounted() {
		if (!window.navigator) {
			this.online = false;
			return;
		}
		this.online = Boolean(window.navigator.onLine);
		window.addEventListener("offline", this._toggleNetworkStatus);
		window.addEventListener("online", this._toggleNetworkStatus);
	},
	methods: {
		_toggleNetworkStatus({ type }) {
			this.online = type === "online";
		}
	},
	destroyed() {
		window.removeEventListener("offline", this._toggleNetworkStatus);
		window.removeEventListener("online", this._toggleNetworkStatus);
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
h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}
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

  .overlay {
    position: absolute;
    top: 50%;
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
  }

  .network .circle {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: green;
    padding: .1rem .5rem;
    border-radius: 1rem;
  }

  .network.offline .circle {
    background: red;
  }
</style>
