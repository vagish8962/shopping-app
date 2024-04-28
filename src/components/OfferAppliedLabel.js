import React from "react";
import { OFFER_AVAILBLE } from "../constant";

const OfferAppliedLabel = ({ offer, quantity }) => {
  return (
    <>
      {OFFER_AVAILBLE[offer] &&
        OFFER_AVAILBLE[offer].applicableToQuantity <= quantity && (
          <div className="offer-applied-label">
            <div>Offer Applied !</div>
            <div>{OFFER_AVAILBLE[offer].name}</div>
          </div>
        )}
    </>
  );
};

export default OfferAppliedLabel;
