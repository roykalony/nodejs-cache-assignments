export default class BasicCache {
  cacheObj = {}
  // eslint-disable-next-line no-useless-constructor
  constructor () {}
  get (key) {
    return this.cacheObj[key]
  }

  /**
     *
     * @param {string} key
     * @param {any} val
     */
  set (key, val) {
    this.cacheObj[key] = val
  }

  toObject () {
    return this.cacheObj
  }
}
