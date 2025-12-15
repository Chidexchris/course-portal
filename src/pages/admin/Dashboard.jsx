import React from 'react'
import Header from '../../includes/Header'
import Sidebar from '../../components/SideBar'

function Dashboard() {
     const stats = [
    {
      title: "Total Courses",
      value: 48,
      bg: "#E6FFFA",
      color: "#0CA678",
      icon: "ti ti-book",
    },
    {
      title: "Registered",
      value: 12,
      bg: "#FFF5F5",
      color: "#FA5252",
      icon: "ti ti-check",
    },
    {
      title: "Departments",
      value: 5,
      bg: "#EFF6FF",
      color: "#1D4ED8",
      icon: "ti ti-building",
    },
    {
      title: "Pending",
      value: 3,
      bg: "#FFF7E6",
      color: "#F59F00",
      icon: "ti ti-clock",
    },
    {
      title: "Units Registered",
      value: 18,
      bg: "#EEF2FF",
      color: "#5A54FF",
      icon: "ti ti-calculator",
    },
  ];

  return (
    <>
      <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6"
        data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />

        <div class="body-wrapper">
          <Header />

          <div class="body-wrapper-inner" >
          <div className="container-fluid">

            <div className="row g-3 pb-5">
      {stats.map((item, index) => (
        <div className="col-md-4 col-lg-2 col-sm-6" key={index}>
          <div
            className="p-3 rounded text-center shadow-sm"
            style={{ backgroundColor: item.bg }}
          >
            <div className="mb-2">
              <i
                className={`${item.icon}`}
                style={{ fontSize: "30px", color: item.color }}
              ></i>
            </div>

            <h6 className="mb-1">{item.title}</h6>
            <h5 style={{ color: item.color }}>{item.value}</h5>
          </div>
        </div>
      ))}
    </div>
            
            {/* Row 1 */}
            <div className="row">
              <div className="col-lg-8 d-flex align-items-strech">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                      <div className="mb-3 mb-sm-0">
                        <h5 className="card-title fw-semibold">Sales Overview</h5>
                      </div>
                      <div>
                        <select className="form-select">
                          <option value="1">March 2025</option>
                          <option value="2">April 2025</option>
                          <option value="3">May 2025</option>
                          <option value="4">June 2025</option>
                        </select>
                      </div>
                    </div>
                    <div id="chart"></div>
                  </div>
                </div>
              </div>
            
              {/* <div className="col-lg-4 d-flex align-items-stretch">
              <div className="card w-100">
                <div className="card-body p-4">
                  <div className="mb-4">
                    <h5 className="card-title fw-semibold">Recent Transactions</h5>
                  </div>
                  <ul className="timeline-widget mb-0 position-relative mb-n5">
                    <li className="timeline-item d-flex position-relative overflow-hidden">
                      <div className="timeline-time text-dark flex-shrink-0 text-end">09:30</div>
                      <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                        <span className="timeline-badge border-2 border border-primary flex-shrink-0 my-8"></span>
                        <span className="timeline-badge-border d-block flex-shrink-0"></span>
                      </div>
                      <div className="timeline-desc fs-3 text-dark mt-n1">Payment received from John Doe of $385.90</div>
                    </li>
                    <li className="timeline-item d-flex position-relative overflow-hidden">
                      <div className="timeline-time text-dark flex-shrink-0 text-end">10:00 am</div>
                      <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                        <span className="timeline-badge border-2 border border-info flex-shrink-0 my-8"></span>
                        <span className="timeline-badge-border d-block flex-shrink-0"></span>
                      </div>
                      <div className="timeline-desc fs-3 text-dark mt-n1 fw-semibold">New sale recorded <a
                          href="javascript:void(0)" className="text-primary d-block fw-normal">#ML-3467</a>
                      </div>
                    </li>
                    <li className="timeline-item d-flex position-relative overflow-hidden">
                      <div className="timeline-time text-dark flex-shrink-0 text-end">12:00 am</div>
                      <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                        <span className="timeline-badge border-2 border border-success flex-shrink-0 my-8"></span>
                        <span className="timeline-badge-border d-block flex-shrink-0"></span>
                      </div>
                      <div className="timeline-desc fs-3 text-dark mt-n1">Payment was made of $64.95 to Michael</div>
                    </li>
                    <li className="timeline-item d-flex position-relative overflow-hidden">
                      <div className="timeline-time text-dark flex-shrink-0 text-end">09:30 am</div>
                      <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                        <span className="timeline-badge border-2 border border-warning flex-shrink-0 my-8"></span>
                        <span className="timeline-badge-border d-block flex-shrink-0"></span>
                      </div>
                      <div className="timeline-desc fs-3 text-dark mt-n1 fw-semibold">New sale recorded <a
                          href="javascript:void(0)" className="text-primary d-block fw-normal">#ML-3467</a>
                      </div>
                    </li>
                    <li className="timeline-item d-flex position-relative overflow-hidden">
                      <div className="timeline-time text-dark flex-shrink-0 text-end">09:30 am</div>
                      <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                        <span className="timeline-badge border-2 border border-danger flex-shrink-0 my-8"></span>
                        <span className="timeline-badge-border d-block flex-shrink-0"></span>
                      </div>
                      <div className="timeline-desc fs-3 text-dark mt-n1 fw-semibold">New arrival recorded
                      </div>
                    </li>
                    <li className="timeline-item d-flex position-relative overflow-hidden">
                      <div className="timeline-time text-dark flex-shrink-0 text-end">12:00 am</div>
                      <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                        <span className="timeline-badge border-2 border border-success flex-shrink-0 my-8"></span>
                      </div>
                      <div className="timeline-desc fs-3 text-dark mt-n1">Payment Done</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard