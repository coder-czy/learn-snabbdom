import h from './mysnobbdom/h'

let myVnode = h('div', {}, [
  h('p', {}, 'haha'),
  h('p', {}, '打啊打'),
  h('p', {}, '大幅度发'),
  h('p', {}, h('span', {}, 'A')),
])

console.log(myVnode)