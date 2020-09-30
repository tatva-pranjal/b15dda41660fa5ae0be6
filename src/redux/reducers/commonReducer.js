
const initialState = {
  errMsg: '',
  data: null,
  randomIdDetail: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DETAIL':
      return {
        ...state,
        data: action.payload.data,
        errMsg: '',
        randomIdDetail: null,
      };
    case 'SET_RANDOM_ID_DETAIL':
      return {
        ...state,
        data: action.payload.data,
        errMsg: '',
      };

    case 'FAILED_TO_SET_DETAIL':
      return {
        ...state,
        data: null,
        errMsg: action.payload.errorObj,
        randomIdDetail: null,
      };

    default:
      return state;
  }
};

export default authReducer;
