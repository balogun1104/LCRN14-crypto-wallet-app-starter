import * as tabActionTypes from './tabActions';

const intialState = () => {
   isTradeModalVisible = false
}

const tabReducer = (state=intialState, action) => {
    switch (action.type) {
        case tabActionTypes.SET_TRADE_MODAL_VISIBILITY:
            return {
                ...state,
                isTradeModalVisible: action.payload.isVisible
            }

        default:
             return state
    }
}

export default tabReducer




// const initialState = {
//     showYesNoModal: false
// }

// export function modalsStore(state = initialState, action) {
//     const actions = {
//         "ShowYesNoModal" : {
//             ...state,
//             showYesNoModal: true
//         },
//         "HideYesNoModal" : {
//             ...state,
//             showYesNoModal: false
//         }
//     }

//     return actions[action.type] || state
// }