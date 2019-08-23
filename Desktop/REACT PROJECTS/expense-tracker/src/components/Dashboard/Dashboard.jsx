import React, { Component } from 'react';
import './../Dashboard/Dashboard.css';

import passport from '../../ImageAssets/pass.jpg';
import Logo from '../Logo/Logo';
import MainButton from '../MainButton/MainButton';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="d-md-flex h-md-100">
          <div className="col-md-4 p-0 h-md-100 mr-5">
            <Logo />
            {/** Status display area */}
            <div className="pt-5">
              <div className="logoarea pt-1 pb-5">
                <div className="statusDisplay">
                  <div className="row">
                    <div className="col-3 py-2">
                      <img
                        src={passport}
                        alt="placeholder"
                        className="img-thumbnail"
                      />
                    </div>
                    <div className="col-9 py-5 pl-0">
                      <h4 className="displayName mb-0">Babatunde Fashola</h4>
                      <p className="dislayEmail">baba2@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="expenseDisplay pt-4">
                  <div className="targetDisplay">
                    <h5 className="font-weight-normal mb-0">
                      Target Monthly Expences
                    </h5>
                    <h4 className="font-weight-bold">N596,000</h4>
                  </div>
                  <div className="progress" style={{ height: '7px' }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: '25%' }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>

                <div className="expenseTable mt-5 shadow-sm p-3 mb-5 bg-white rounded">
                  <p className="tabTitle font-weight-bold">
                    Daily Expenses Summary
                  </p>
                  <div className="tab_le">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Date</th>
                          <th scope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>30, November 2019</td>
                          <td>N40,000</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>29, November 2019</td>
                          <td>N50,000</td>
                        </tr>

                        <tr>
                          <th scope="row">3</th>
                          <td>29, November 2019</td>
                          <td>N50,000</td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a
                            className="page-link"
                            href="/"
                            tabIndex="-1"
                            aria-disabled="true"
                          >
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 h-md-100 loginarea ml-5 shadow p-3 mb-2 rounded bg-light">
            <div className="row dashboardBanner m-4 bg-white">
              <div className="col-12 p-3 m-3 rounded">
                <h4 className="welcome mb-0">
                  <span>Welcome back, </span> Babatunde
                </h4>
                <p className="lead font-weight-normal ">
                  Now let's get your expenses for this month
                </p>
              </div>
            </div>
            <div className="p-5">
              <form>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Target Monthly Expense
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="formGroupExampleInput"
                    placeholder="Enter target expense"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Date</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="formGroupExampleInput2"
                    placeholder="Enter Date"
                  />
                </div>
                <label className="pt-4" htmlFor="getExpenses">
                  Today's Expenses
                </label>

                <div className="form-row pt-3">
                  <div className="col-7">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter expense"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                <div className="form-row pt-3">
                  <div className="col-7">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter expense"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                <div className="form-row pt-3">
                  <div className="col-7">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter expense"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                <div className="form-group row pt-5">
                  <label htmlFor="colFormLabelSm" className="col-sm-4 py-2">
                    <b>Total Actual Expenses:</b>
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="colFormLabelSm"
                      placeholder=""
                    />
                  </div>
                </div>

                <MainButton />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
