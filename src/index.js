(function(){
  // if (typeof window.ga === "undefined") {
  //     debugger
  // }
  function install (Vue, options = {}) {
      Vue.prototype.$analytics = {
        pageTrack(track_uri) {
          if (typeof window.ga !== "undefined") {
            ga('send', 'pageview', track_uri)
          }
        },
        eventTrack(options = {}) {
          if (typeof window.ga !== "undefined") {
            if (options !== {}) {
              // ga('send', 'event', options.category, options.action, options.label,)
              ga('send', {
                hitType: 'event',
                eventCategory: options.category,
                eventAction: options.action,
                eventLabel: options.label,
                eventValue: options.value
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
