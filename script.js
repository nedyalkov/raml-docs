(function () {
  var items = document.querySelectorAll('[data-for]')
  var aside = document.getElementById('aside')
  var container = document.getElementById('container')
  var watchers = []
  var activeItem

  for (var i = 0; i < items.length; i++) {
    watchers.push(document.getElementById(items[i].getAttribute('data-for')))
  }

  // Little `forEach` helper.
  function forEach (arr, fn) {
    for (var i = 0; i < arr.length; i++) {
      fn(arr[i], i, arr)
    }
  }

  /**
   * Get the current item based on scroll position.
   */
  function getActiveItem (scrollTop) {
    var diff = container.offsetTop - 2 // Arbitrary number.

    for (var i = 0; i < items.length; i++) {
      var watcher = watchers[i]
      var nextWatcher = watchers[i + 1]

      if (watcher && scrollTop >= watcher.offsetTop + diff && (!nextWatcher || scrollTop < nextWatcher.offsetTop + diff)) {
        return items[i]
      }
    }
  }

  /**
   * Get an array of elements to an item node.
   */
  function getPath (item) {
    var path = []

    while (item) {
      if (item.tagName === 'LI') {
        path.unshift(item)
      }

      item = item.parentNode
    }

    return path
  }

  /**
   * Update the current active item for window scroll.
   */
  function updateActiveItem (scrollTop) {
    var newActiveItem = getActiveItem(scrollTop)

    if (newActiveItem !== activeItem) {
      var prevPath = getPath(activeItem)
      var newPath = getPath(newActiveItem)
      var len = Math.max(prevPath.length, newPath.length)

      // TODO: Diff between `prevPath` and `newPath`.

      for (var i = 0; i < len; i++) {
        if (prevPath[i] !== newPath[i]) {
          for (var k = i; k < prevPath.length; k++) {
            prevPath[k].className = prevPath[k].className.replace(/ active/, '')
          }

          for (var j = i; j < newPath.length; j++) {
            newPath[j].className += ' active'
          }

          break
        }
      }

      activeItem = newActiveItem
    }
  }

  function updateAsideTrail (scrollTop) {
    var top = container.offsetTop
    var bottom = top + container.offsetHeight
    var windowHeight = window.innerHeight

    var underScrolled = scrollTop < top
    var overScrolled = (scrollTop + windowHeight) > bottom

    if (!underScrolled && !overScrolled) {
      aside.style.position = 'fixed'
      aside.style.top = '0'
      aside.style.left = container.offsetLeft + 'px'
      aside.style.bottom = '0'
      aside.style.height = 'auto'
      aside.style.maxHeight = 'auto'
    } else {
      aside.style.position = 'absolute'
      aside.style.top = underScrolled ? '0' : 'auto'
      aside.style.left = '0'
      aside.style.bottom = overScrolled ? '0' : 'auto'
      aside.style.height = '100%'
      aside.style.maxHeight = '100vh'
    }
  }

  /**
   * Update elements on window scroll.
   */
  function updatePositions () {
    var scrollTop = window.scrollY

    updateActiveItem(scrollTop)
    updateAsideTrail(scrollTop)
  }

  window.addEventListener('scroll', updatePositions)
  window.addEventListener('resize', updatePositions)

  updatePositions()

  document.body.className += ' js'
})()
