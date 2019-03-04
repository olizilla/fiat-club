
// Add each slides index as it's id.
// Set up keyboard navigation, incrementing the hash to change slide.

const nodeList = document.querySelectorAll('section')
const nodes = [].slice.call(nodeList)
const addId = (node, index) => node.id = index

nodes.map(addId)

const getHashIndex = () => {
  const hash = document.location.hash
  const indexStr = hash ? hash.substring(1) : "0"
  return Number(indexStr)
}

const fwd = () => {
  const i = getHashIndex() + 1
  document.location.hash = i % nodes.length
}

const back = () => {
  const i = getHashIndex() - 1
  document.location.hash = Math.max(i, 0) % nodes.length
}

const keyboardNav = (evt) => {
  const keyMap = {
    ArrowLeft: back,
    LeftArrow: back,
    ArrowUp: back,
    UpArrow: back,
    ArrowRight: fwd,
    RightArrow: fwd,
    ArrowDown: fwd,
    DownArrow: fwd,
    Space: fwd
  }
  for (let key of Object.keys(keyMap)) {
    if (evt.key.endsWith(key)) return keyMap[key]()
  }
}

document.addEventListener('keydown', keyboardNav)
