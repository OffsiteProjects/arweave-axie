; (function () {
  const xhttp = new XMLHttpRequest();
  let routes = null
  const routePromise = new Promise((resolve, reject) => {
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText)
        routes = JSON.parse(this.responseText)
        resolve()
      }
    }
  })

  xhttp.open('GET', 'https://api.jsonbin.io/b/5f0798c95d4af74b012979e1/latest', true)
  xhttp.send()

  async function onMount() {
    await routePromise
    const originalPush = window.next.router.push
    window.next.router.push = function (route, { query }) {
      const currentURL = new URL(window.location.href)
      const currentRoute = currentURL.pathname
      const currentPage = routes[currentRoute] || currentRoute
      const currentQuery = currentURL.search
      const page = routes[route] || routes['/' + route.split('/')[1]]
      let newQuery = query ? Object.keys(query).map(key => key + '=' + query[key]).join('&') : ''
      if (newQuery.length > 0) newQuery = '?' + newQuery
      console.log(route, page, newQuery, currentPage, currentQuery)
      if (page !== currentPage) {
        window.location = page + (newQuery || '')
      } else if (currentRoute !== route || currentQuery !== newQuery) {
        originalPush.apply(window.next.router, arguments)
      }
    }
  }

  let next = undefined
  let router = undefined
  Object.defineProperty(window, 'next', {
    get: function () {
      return next
    },
    set: function (val) {
      next = val
      Object.defineProperty(next, 'router', {
        get: function () {
          return router
        },
        set: function (val) {
          router = val
          onMount()
        }
      })
    }
  })
}())