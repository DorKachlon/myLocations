const selectedItemReducer = (state = [], action) => {
  switch (action.type) {
    //Create
    case "SetSelectedItem": {
      if (state[0]) {
        if (state[0].id === action.payload.id) {
          return [];
        }
      }
      state = [action.payload];
      return state;
    }
    case "ResetSelectedItem": {
      return [];
    }

    default:
      return state;
  }
};

export default selectedItemReducer;
