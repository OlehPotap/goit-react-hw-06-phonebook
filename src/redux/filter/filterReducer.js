import {changeFilterValue} from './filterAction'
import { createReducer } from '@reduxjs/toolkit';

const filterReducer = createReducer('', {
    [changeFilterValue]: (state, action) =>  {
        return state = action.payload
    }
})

export default filterReducer;

