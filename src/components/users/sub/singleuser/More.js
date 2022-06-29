import React from 'react'
import MoreList from './MoreList'

const More = () => {
  return (
        <div className="tab-pane fade show active" id="more" aria-labelledby="more-tab">
            <div className="table-more table-responsive mt-2 mb-2">
                <table className="table table-borderless users-table">
                    <thead>
                        <tr>
                            <th>Transaction Type</th>
                            <th>Transaction Medium</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MoreList />
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default More