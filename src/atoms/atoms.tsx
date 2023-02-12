import {atom} from "jotai"

const navigation = atom<boolean>(false)
const femalecollection = atom<boolean>(false)
const cart = atom<number>(0)

export {navigation, femalecollection, cart} 