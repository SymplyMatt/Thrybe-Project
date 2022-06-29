import React from 'react'
import TransactionsCard from './TransactionsCard'
import TransactionsList from './TransactionsList'

const Transactions = () => {
  return (
                        <div className="col-xl-5 col-lg-6 col-md-12 mb-3 d-flex flex-column flex-grow-1">
							<div className="custom-card h-100">
								<div className="d-flex justify-content-between">
									<h5>Last transaction</h5>
									<a href="#"
										><img
											src="./assets/images/right-pointer.svg"
											className="img-fluid"
											alt=""
									/></a>
								</div>
								<TransactionsCard />
								<TransactionsList />
							</div>
						</div>
  )
}

export default Transactions