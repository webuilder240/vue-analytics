(function(){
  // if (typeof window.ga === "undefined") {
  //     debugger
  // }
  function install (Vue, options = {}) {
      Vue.prototype.$analytics = {
        pageTrack(track_uri) {
          if (typeof window.ga !== "undefined") {
			ga('set', 'title', document.title)
            ga('send', 'pageview', track_uri)
          }
        },
        eventTrack(track_options = {}) {
          if (typeof window.ga !== "undefined") {
            if (track_options !== {}) {
              // ga('send', 'event', options.category, options.action, options.label,)
              ga('send', {
                hitType: 'event',
                eventCategory: track_options.category,
                eventAction: track_options.action,
                eventLabel: track_options.label,
                eventValue: track_options.value
              });
            }
          }
        }
      }
  }
  if (window.Vue) {
    Vue.use(install)
  } else {
    module.exports = install
  }
})()
