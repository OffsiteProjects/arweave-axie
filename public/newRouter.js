; (function () {
  const routes = {
    '/': '/index.html',
    '/item': '/market-item.html',
    '/land': '/market-land.html',
    '/bundle': '/market-bundle.html',
    '/axie': '/market-axie.html',
    '/login': '/login.html',
    '/profile/dashboard': '/dashboard.html',
    '/profile/inventory/axie': '/inventory-axie.html',
    '/profile/inventory/land': '/inventory-land.html',
    '/profile/inventory/item': '/inventory-item.html',
    '/profile/inventory/bundle': '/inventory-bundle.html',
    '/profile/offer': '/offer.html',
    '/profile/activity': '/activity.html',
  }

  function onMount() {
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