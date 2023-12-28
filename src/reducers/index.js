const initialState = [];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS":
      // console.log("Fetch_Contact", action.payload);
      return action.payload;
    case "ADD_CONTACT":
      // console.log("ADD_CONTACT", action.payload);
      return [...state, action.payload];
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      console.log("filterContact", filterContacts);
      return filterContacts;
    case "UPDATE_CONTACT":
      const updateState = state.findIndex((contact) =>contact.id === action.payload.id);
      // console.log("updateState", updateState);
      
      state[updateState] = {...state,...action.payload};
      return state;

    default:
      return state;
  }
};

export default contactReducer;
