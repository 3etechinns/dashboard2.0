import React, { useState, useEffect, useContext } from "react";
import { Col, Card } from "react-bootstrap";
import { TransactionsContext } from "../../context/TransactionsState";
// import {transactions} from '../data'

export const Balance = () => {
  const [total, setTotal] = useState(0);
  const { transactions } = useContext(TransactionsContext);

  useEffect(() => {
    const balance = transactions.reduce((acc, { amount }) => {
      let total = acc + amount;
      return total;
    }, 0);
    setTotal(balance.toLocaleString("en-us"));
  }, [transactions]);

  return (
    <Col xl={4} className="grid-margin">
      <Card className="bg-light text-dark border-gray rounded-3 shadow">
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="mb-4">Balance</h4>
            <div className="icon icon-box-success">
              <span className="mdi mdi-arrow-top-right icon-item"></span>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-9">
              <h3 className="d-flex align-items-center m-b-0">${total}</h3>
            </div>

            <div className="col-3 text-right">
              <p className="mb-0">80% goal</p>
            </div>
          </div>

          <div className="progress bg-grey" style={{ height: "7px" }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
