import React, { createContext, useReducer } from "react";

const initialState = {
  adFormat: 0,
  adFor: "",
  id: "",
  campaignName: "",
  compaignImage: "",
  destinationURL: "",
  campaignBid: 0,
  geo: "",
  bidRequests: 0,
  videoImp: 0,
  visits: 0,
  winRate: 0.0,
  cost: 0.0,
  dailyCap: "",
  title: "",
  descriptionone: "",
  descriptiontwo: "",
  displayURL: "",
  entryDate: new Date(),
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
