import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import filterReducer from './filter/filterReducer'
import formReducer from './form/formReducer'
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';



// это наш стейт по сути и есть
const rootReducer = combineReducers({
    filterValue: filterReducer,
    contacts: formReducer,
})
const store =configureStore({reducer: rootReducer})
// это наш стейт по сути и есть
export default store;