import React, { createContext, useReducer } from "react";

const initialState = {
  adFormat: 0,
  adFor:"",
  id: "",
  campaignName: "",
  campaignBid: 0,
  geo: "",
  bidRequests: 0,
  videoImp: 0,
  visits: 0,
  winRate: 0.00,
  cost: 0.00,
  dailyCap: "",
};

const NewCampaignDetailsContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

const CompaingStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NewCampaignDetailsContext.Provider value={{ state, dispatch }}>
      {children}
    </NewCampaignDetailsContext.Provider>
  );
};

export { NewCampaignDetailsContext, CompaingStateProvider };
