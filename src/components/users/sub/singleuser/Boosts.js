import React,{useState} from 'react'
import BoostsList from './BoostsList';

const Boosts = () => {
    const [showDropDown, setShowDropDown] = useState(false);
  return (
        <div className="tab-pane fade show active" id="boosts" role="tabpanel" aria-labelledby="boosts-tab">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-4 mt-3">
                    <h5 className="mb-0">Profile Boosts</h5>
                </div>
                <div className="col-lg-5 mt-3">
                    <div
                        className="align-items-center justify-content-end"
                        id="users-filter"
                    >
                        <label htmlFor="filter" className="font-sm mb-0">Filter by:</label
                        >&nbsp;&nbsp;&nbsp;
                      <select className="filter-field2 font-sm" style={{ width: 'auto' }}>
                            <option value="" >Duration</option></select
                        >
                        <div className="dropdown messages-dropdown ml-4">
                            <button
                              className="btn dropdown-button position-relative"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              style={{ width: 'auto' }}
                              onClick={()=>setShowDropDown(!showDropDown)}
                            >
                                <span className="font-sm">Sort By</span>&nbsp;&nbsp;
                                <img
                                    src="./assets/images/filter-icon.svg"
                                    alt="notification"
                                />
                            </button>
                            <div
                                className={`dropdown-menu mt-3 ${showDropDown && 'block'}`}
                                aria-labelledby="dropdownMenuButton"
                            >
                                <div className="position-relative drop-down-menu-inner">
                                    <div className="position-absolute dropdown-pointer">
                                        <i className="fa fa-caret-up"></i>
                                    </div>
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="users-table-div table-responsive mt-4 mb-3">
                <table className="table table-borderless users-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Boost Duration</th>
                            <th>Amount Spent</th>
                            <th>Appearance</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <BoostsList />
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Boosts