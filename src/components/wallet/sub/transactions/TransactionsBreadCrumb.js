import React from "react";
import { useNavigate } from "react-router-dom";

const TransactionsBreadCrumb = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
}) => {
  const navigate = useNavigate();
  return (
    <div class='row'>
      <div class='col-12 mt-5 mb-3'>
        <ul class='myBreadcrumb p-0'>
          <li
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <a href='#' class='d-flex align-items-center'>
              <i class='fa fa-home text-darkGrey'></i>
              <span class='font-xs pl-2 f-weight-500 mt-1 text-dark'>Home</span>
            </a>
          </li>
          <li
            class=''
            onClick={(e) => {
              e.preventDefault();
              setWalletPage("mgt");
            }}
          >
            <a href='#' class='d-flex align-items-center'>
              <span class='font-xs f-weight-500 mt-1 text-dark'>
                Wallet management
              </span>
            </a>
          </li>
          <li class='active'>
            <a href='#' class='d-flex align-items-center'>
              <span class='font-xs f-weight-500 mt-1 text-dark'>
                Payments & Transactions
              </span>
            </a>
          </li>
        </ul>
        <div class='mt-4 d-flex justify-content-between align-items-center'>
          {walletPage == "transactions-list" && (
            <h5>Payments & Transactions</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionsBreadCrumb;
