
//真正创建节点，将vnode创建为DOM，插入到pivot这个元素之前
/**
 * 创建节点，将vnode虚拟节点创建为ＤＯＭ节点
 * 是孤儿节点，不进行插入操作
 * @param {object} vnode 
 */
export default function createElement (vnode) {
  // 创建一个DOM节点，这个节点现在还是孤儿节点
  let domNode = document.createElement(vnode.sel)
  //  判断是有子节点还是有文本
  if (vnode.text !== '' && vnode.children === undefined || vnode.children.length == 0) {
    // 内部都是文字
    domNode.innerText = vnode.text
  } else if (Array.isArray(vnode.children) && vnode.children.length) {
    // 说明内部是子节点，需要递归创建节点
    // 遍历数组
    for (const ch of vnode.children) {
      // 递归调用 创建出它的DOM，一旦调用createElement意味着创建出DOM了。并且它的elm属性指向了创建出的dom，但是没有上树，是一个孤儿节点
      let chDOM = createElement(ch) // 得到 子节点 表示的 DOM节点 递归最后返回的一定是文本节点
      // console.log(ch)
      domNode.appendChild(chDOM)
    }
  }
  // 补充虚拟节点elm属性
  vnode.elm = domNode
  // 返回DOMNode DOM对象
  return domNode

}