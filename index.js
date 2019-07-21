const getName = (node) => {
    return node.name
}

const headNode = (linkedList, collection) => {
    return collection[linkedList]
}

const next = (node, collection) => {
    return collection[node.next]
}

const nodeAt = (targetIndex, linkedList, collection) => {
    let i = 0
    let node = headNode(linkedList, collection)
    while (i < targetIndex) {
        node = next(node, collection)
        i++
    }
    return node
}

const addressAt = (targetIndex, linkedList, collection) => {
    let i = 0
    let node = headNode(linkedList, collection)
    let address = linkedList
    while (i < targetIndex) {
        address = node.next
        node = next(node, collection)
        i++
    }
    return address
}

const indexAt = (targetNode, collection, linkedList) => {
    let i = 0
    let node = headNode(linkedList, collection)
    while (node !== targetNode) {
        node = next(node, collection)
        i++
    }
    return i
}

const insertNodeAt = (targetIndex, newNode, linkedList, collection) => {
    const node = nodeAt(targetIndex - 1, linkedList, collection)
    collection[newNode].next = node.next
    node.next = newNode
}

const deleteNodeAt = (targetIndex, linkedList, collection) => {
    const node = nodeAt(targetIndex - 1, linkedList, collection)
    node.next = next(node, collection).next
}