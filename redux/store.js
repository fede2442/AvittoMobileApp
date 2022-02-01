
import { createStore } from 'redux'
import habits from './reducers/notesApp'

const store = createStore(habits)

export default store