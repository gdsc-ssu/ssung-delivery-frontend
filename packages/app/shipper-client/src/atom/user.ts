import { atom } from 'jotai'

const userAtom = atom<{ name: string; id: string }>({ name: '', id: '' })

export { userAtom }
