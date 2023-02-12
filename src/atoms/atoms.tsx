import {atom} from "jotai"

const navigation = atom<boolean>(false)
const collection = atom<boolean>(false)
const cart = atom<number>(0)

export {navigation, collection, cart} 