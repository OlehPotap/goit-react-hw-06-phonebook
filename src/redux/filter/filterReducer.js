import {changeFilterValue} from './filterAction'
import { createReducer } from '@reduxjs/toolkit';

const filterReducer = createReducer('', {
    [changeFilterValue]: (state, action) =>  {
        return action.payload
    }
})

export default filterReducer;

