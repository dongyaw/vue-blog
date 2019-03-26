/**
 * Created by whtmbyy on 2018/3/18.
 */
const STORAGE_KEY = 'BGIMGNAME'
export default{
  get () {
    return window.localStorage.getItem(STORAGE_KEY) || 'bj1.jpg'
  },
  save (items) {
    window.localStorage.setItem(STORAGE_KEY, items)
  }
}
