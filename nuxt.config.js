module.exports = {
	/*
  ** Build configuration
  */
	build: {},
	/*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
	head: {
		script: [
			{
				src:
					"https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.7.18/fabric.min.js"
			}
		]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: "#3B8070" },
	/*
  ** Customize app manifest
  */
	manifest: {
		theme_color: "#3B8070"
	},
	/*
  ** Modules
  */
	modules: ["@nuxtjs/pwa"]
};
