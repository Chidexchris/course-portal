import React from 'react'

function Header() {
  return (
    <>
      <header className="app-header top-0">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item d-block d-xl-none">
              <a className="nav-link sidebartoggler " id="headerCollapse" href="javascript:void(0)">
                <i className="ti ti-menu-2"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " href="javascript:void(0)" id="drop1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="ti ti-bell"></i>
                <div className="notification bg-primary rounded-circle"></div>
              </a>
              <div className="dropdown-menu dropdown-menu-animate-up" aria-labelledby="drop1">
                <div className="message-body">
                  <a href="javascript:void(0)" className="dropdown-item">
                    Item 1
                  </a>
                  <a href="javascript:void(0)" className="dropdown-item">
                    Item 2
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              
              <li className="nav-item dropdown">
                <a className="nav-link " href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <img src="../assets/images/profile/user-1.jpg" alt="" width="35" height="35" className="rounded-circle" />
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                  <div className="message-body">
                    <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                      <i className="ti ti-user fs-6"></i>
                      <p className="mb-0 fs-3">My Profile</p>
                    </a>
                    <a href="./authentication-login.html" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header