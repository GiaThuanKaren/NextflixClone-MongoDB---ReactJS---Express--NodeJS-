import {createStore} from 'redux'
import rootReducer from '../Reducer/RootReduce';
const store=createStore(rootReducer);
export default store