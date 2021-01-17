import books from "../../data"

const bookReducer = (state = [], action) => {
    // eslint-disable-next-line default-case
    switch ( action.type) {
        case 'ADD':
            return action.data
        case 'DELETE':
            return action.data
        case 'EDIT':
            return action.data


    }
}

export default bookReducer;