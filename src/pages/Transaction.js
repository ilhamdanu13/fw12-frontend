import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { transactionAction } from "../redux/actions/transaction";
import { choosePayment } from "../redux/reducers/transaction";
// import { choosePayment } from "../redux/reducers/transaction";

function Transaction() {
  const dispatch = useDispatch();
  const transactionData = useSelector((state) => state.transaction);

  const dispatchTrx = () => {
    const data = {
      paymentMethodId: 1,
      fullName: "admin",
      email: "admin@mmail.com",
      phoneNumber: "0812242522",
    };
    dispatch(transactionAction({ transactionData: { ...transactionData, ...data } }));
  };

  return (
    <>
      <button onClick={dispatchTrx}>Pay your order</button>
    </>
  );
}

export default Transaction;
