

const filterReducer = (state = '', {type, payload}) => {
    switch(type) {

        case 'filter/value':
            return  payload;

        default :return state;
};
}

export default filterReducer;

