
import { createStore } from 'redux'
import contador_reducer from './reducers/notesApp'

const store = createStore(contador_reducer);

export default store