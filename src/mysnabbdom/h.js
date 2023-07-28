import vnode from './vnode'

/**
 * 产生虚拟DOM树，返回的一个对象
 * 低配版本的h函数，这个函数必须接受三个参数，缺一不可
 * @param {*} sel
 * @param {*} data
 * @param {*} c
 * 调用只有三种形态 文字、数组、h函数
 * ① h('div', {}, '文字')
 * ② h('div', {}, [])
 * ③ h('div', {}, h())
 */

export default function (sel, data, c) {
  //检查参数个数
  if (arguments.length != 3) {
    throw new Error('参数必须为3个')
  }

  if (typeof c == 'string' || typeof c == 'number') {
    //形态①
    return vnode(sel, data, undefined, c, undefined)

  } else if (Array.isArray(c)) {
    //形态②
    let children = []
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel')))
        throw new Error('传入参数中有不是h函数')
      children.push(c[i])
    }
    return vnode(sel, data, children, undefined, undefined)

  } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
    //形态③
    let children = [c]
    return vnode(sel, data, children, undefined, undefined)

  } else {
    throw new Error('传入的第三个参数类型不对')
  }

}