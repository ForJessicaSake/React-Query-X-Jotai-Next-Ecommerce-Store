import {atom} from "jotai"

const navigation = atom<boolean>(false)
const store= atom<string>("women")
const cart = atom<any>([])

export {navigation, store, cart} 