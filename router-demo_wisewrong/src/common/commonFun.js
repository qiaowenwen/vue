export default {
  // 排序
  // attr为数据源，sortkey排序的属性名称，reverse为1时为升序，-1为降序，2为原来的值
  sortData (attr, data) {
    var that = this
    var attrs = attr
      .map(item => {
        return {
          value: item,
          key: that.getValueByPath(item, data.sortkey)
        }
      })
      .sort((a, b) => {
        console.log(a)
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
  // 获取对象指定的属性
  getValueByPath (object, prop) {
    prop = prop || ''
    const paths = prop.split('.')
    let current = object
    let result = null
    for (let i = 0, j = paths.length; i < j; i++) {
      const path = paths[i]
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
