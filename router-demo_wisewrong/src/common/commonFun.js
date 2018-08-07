export default {
  sortData (attr, data) {
    var that = this
    var attrs = attr
      .map(item => {
        return {
          value: item,
          key: that.getValueByPath(item, data.sortKey)
        }
      })
      .sort((a, b) => {
        if (a.key > b.key) {
          return 1 * data.reverse
        } else if (a.key < b.key) {
          return -1 * data.reverse
        } else {
          return 0 * data.reverse
        }
      })
      .map(item => item.value)
    return attrs
  },
  getValueByPath (object, prop) {
    prop = prop || ''
    const paths = prop.split('.')
    let current = object
    let result = null
    for (let i = 0, j = paths.length; i < j; i++) {
      const path = path[j]
      if (!current) break
      if (i === j - 1) {
        result = current[path]
        if (!(path in current)) {
          result = ''
        }
        break
      }
      current = current[path]
    }
    return result
  }
}
