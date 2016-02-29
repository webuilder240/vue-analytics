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
        eventTrack(eventName,options = {}) {
          if (typeof window.ga !== "undefined") {
            if (options !== {}) {
              ga('send', 'event', options.category, options.action, options.label, options.value)
            } else {
              ga('send', 'event', 'Event', '', '', '')
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
