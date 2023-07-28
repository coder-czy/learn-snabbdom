import createElement from "./createElement"
import vnode from "./vnode"

/**
 * 对比虚拟vnode进行上树
 * @param {DOM|vnode} oldVnode 
 * @param {vnode} newVnode 
 */
export default function (oldVnode, newVnode) {
  // 判断第一个参数是DOM节点还是Vnode
  if (oldVnode.sel == '' || oldVnode.sel === undefined) {
    // 说明oldVnode是DOM节点，需要包装成虚拟节点
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
  }

  // 判断oldVnode和newVnode是不是同一个节点
  if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
    console.log('同一个节点')
  } else {
    console.log('不是同一个节点，暴力插入新的，删除旧的')
    // 创建新虚拟节点为DOM节点
    // 要操作ＤＯＭ，所以都要转换为DOM节点
    let newVnodeElm = createElement(newVnode)
    let oldVnodeElm = oldVnode.elm
    // 插入新节点到旧节点之前
    if (newVnodeElm) {
      // 判断newVnodeElm是存在的，在旧节点之前插入新节点
      oldVnodeElm.parentNode.insertBefore(newVnodeElm, oldVnodeElm)
    }
    // 删除旧节点
    oldVnodeElm.parentNode.removeChild(oldVnodeElm)
  }

}