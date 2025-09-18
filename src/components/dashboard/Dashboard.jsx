import React, { useEffect } from 'react';
import logoSm from '../../assets/images/logo-sm.png';
// This component is a direct conversion of the provided HTML.
// It assumes that the necessary CSS and JavaScript files (vendors.min.css,
// app.min.css, vendors.min.js, app.js, dashboard.js, config.js) are already
// included in your main HTML file (e.g., public/index.html).
// The original JavaScript logic is adapted to run within React's lifecycle.

const Dashboard = () => {
  useEffect(() => {
    // This script block corresponds to the original <script> for the theme dropdown.
    // It's moved here to ensure the DOM elements are available.
    // However, since it relies on window.config and other global variables,
    // the external script files must be loaded first.
    // We can't directly execute this within React's virtual DOM, but we can
    // replicate the logic. A simpler approach is to rely on the external scripts.
    // For a functional approach, you'd use refs and state to manage this.
    // As per the user's request to "not touch or change anything," this script block
    // is left here for reference. The `app.js` and `config.js` files are expected
    // to handle this behavior.
    
    // Original script:
    // (function() {
    //   // Skin Dropdown
    //   document.querySelectorAll('[data-dropdown="custom"]').forEach(dropdown => {
    //     const trigger = dropdown.querySelector('a[data-bs-toggle="dropdown"], button[data-bs-toggle="dropdown"]');
    //     const items = dropdown.querySelectorAll('button[data-skin]');
    //
    //     const triggerImg = trigger.querySelector('[data-trigger-img]');
    //     const triggerLabel = trigger.querySelector('[data-trigger-label]');
    //
    //     const config = JSON.parse(JSON.stringify(window.config));
    //     const currentSkin = config.skin;
    //
    //     items.forEach(item => {
    //       const itemSkin = item.getAttribute('data-skin');
    //       const itemImg = item.querySelector('img')?.getAttribute('src');
    //       const itemText = item.querySelector('span')?.textContent.trim();
    //
    //       if (itemSkin === currentSkin) {
    //         item.classList.add('drop-custom-active');
    //         if (triggerImg && itemImg) triggerImg.setAttribute('src', itemImg);
    //         if (triggerLabel && itemText) triggerLabel.textContent = itemText;
    //       } else {
    //         item.classList.remove('drop-custom-active');
    //       }
    //
    //       item.addEventListener('click', function () {
    //         items.forEach(i => i.classList.remove('drop-custom-active'));
    //         this.classList.add('drop-custom-active');
    //
    //         const newImg = this.querySelector('img')?.getAttribute('src');
    //         const newText = this.querySelector('span')?.textContent.trim();
    //
    //         if (triggerImg && newImg) triggerImg.setAttribute('src', newImg);
    //         if (triggerLabel && newText) triggerLabel.textContent = newText;
    //
    //         if (typeof layoutCustomizer !== 'undefined') {
    //           layoutCustomizer.changeSkin(itemSkin);
    //         }
    //       });
    //     });
    //   });
    // })();

    // Original script block for sidenav and icons.
    // This is also expected to be handled by app.js and the included lucide script.
    // We add a similar useEffect to ensure the lucide icons are created after render.
    // The link activation logic is also here.
    
    // It's important to note that the external script files (app.js, dashboard.js, etc.)
    // will operate on the DOM directly. This is a non-standard React practice but is
    // required to fulfill the user's request to keep the UI exactly the same and use
    // the existing JS files.
    if (window.lucide) {
        window.lucide.createIcons();
    }
    
    const currentUrlT = window.location.href.split(/[?#]/)[0];
    const currentPageT = window.location.pathname.split("/").pop();
    
    document.querySelectorAll('.side-nav-link[href]').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (!linkHref) return;
        
        const match = linkHref === currentPageT || link.href === currentUrlT;
        if (match) {
            link.classList.add('active');
            const li = link.closest('li.side-nav-item');
            if (li) li.classList.add('active');
            
            let parentCollapse = link.closest('.collapse');
            while (parentCollapse) {
                parentCollapse.classList.add('show');
                const parentToggle = document.querySelector(`a[href="#${parentCollapse.id}"]`);
                if (parentToggle) {
                    parentToggle.setAttribute('aria-expanded', 'true');
                    const parentLi = parentToggle.closest('li.side-nav-item');
                    if (parentLi) parentLi.classList.add('active');
                }
                parentCollapse = parentCollapse.parentElement.closest('.collapse');
            }
        }
    });

  }, []); // Empty dependency array means this effect runs once after the initial render.

  return (
    <>
      <div className="wrapper">
        {/* Topbar Start */}
        <header className="app-topbar">
  <div className="container-fluid topbar-menu">
    <div className="d-flex align-items-center justify-content-center gap-2">
      <div className="logo-topbar">
        <a href="#" className="logo-dark">
          <span className="d-flex align-items-center gap-1">
            <img src={logoSm} alt="logo-sm" height="22" />
            <span className="logo-text text-body fw-bold fs-xl">Floora IVR</span>
          </span>
        </a>
        <a href="#" className="logo-light">
          <span className="d-flex align-items-center gap-1">
            <img src={logoSm} alt="logo-sm" height="22" />
            <span className="logo-text text-body fw-bold fs-xl">Floora IVR</span>
          </span>
        </a>
      </div>

      {/* Sidebar toggle button */}
      <a onClick={toggleSidebar} className="btn btn-sm fs-2xl sidebar-toggle d-none d-lg-block">
        <Menu size={20} />
      </a>

      <div className="ms-auto d-flex align-items-center">
        <form className="app-search d-none d-lg-block">
          <div className="input-group">
            <input type="search" className="form-control" placeholder="Search..." />
            <span className="mdi mdi-magnify search-icon"></span>
          </div>
        </form>
        <div className="dropdown d-none d-lg-block">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
            <i className="ri-moon-line fs-18"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <h6 className="dropdown-header">Choose Layout</h6>
            <a href="#" className="dropdown-item">Light</a>
            <a href="#" className="dropdown-item">Dark</a>
          </div>
        </div>
        <div className="dropdown d-none d-lg-block">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
            <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1 rounded-circle" height="18" />
            <span className="align-middle">English</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <a href="#" className="dropdown-item">
              <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1 rounded-circle" height="18" />
              <span className="align-middle">German</span>
            </a>
            <a href="#" className="dropdown-item">
              <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1 rounded-circle" height="18" />
              <span className="align-middle">Italian</span>
            </a>
            <a href="#" className="dropdown-item">
              <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1 rounded-circle" height="18" />
              <span className="align-middle">Spanish</span>
            </a>
            <a href="#" className="dropdown-item">
              <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1 rounded-circle" height="18" />
              <span className="align-middle">Russian</span>
            </a>
          </div>
        </div>
        <div className="dropdown d-none d-lg-block">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
            <i className="ri-settings-2-line fs-18"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <a className="dropdown-item" href="#">
              <i className="ri-settings-3-line"></i>
              Settings
            </a>
            <a className="dropdown-item" href="#">
              <i className="ri-account-circle-line"></i>
              Profile
            </a>
            <a className="dropdown-item" href="#">
              <i className="ri-logout-box-line"></i>
              Logout
            </a>
          </div>
        </div>
        <div className="dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
            <i className="ri-bell-line fs-18"></i>
            <span className="badge badge-warning text-bg-warning rounded-circle">4</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end notifications-dropdown">
            <h6 className="dropdown-header">Notifications</h6>
            <div data-simplebar style={{ maxHeight: '230px' }}>
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon bg-primary rounded-circle">
                  <i className="ri-user-line"></i>
                </div>
                <p className="notify-details">
                  <small className="text-muted">New user registered.</small>
                </p>
              </a>
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon bg-warning rounded-circle">
                  <i className="ri-user-line"></i>
                </div>
                <p className="notify-details">
                  <small className="text-muted">New leads arrived.</small>
                </p>
              </a>
            </div>
            <a href="#" className="dropdown-item text-center">View All</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="nav-link dropdown-toggle" id="profile-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="assets/images/users/avatar-1.jpg" alt="user-image" className="rounded-circle" />
          </a>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="profile-dropdown">
            <h6 className="dropdown-header">Hi, Welcome!</h6>
            <a className="dropdown-item" href="#">
              <i className="ri-account-circle-line align-middle me-1"></i>
              Profile
            </a>
            <a className="dropdown-item" href="#">
              <i className="ri-settings-2-line align-middle me-1"></i>
              Settings
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <i className="ri-logout-box-line align-middle me-1"></i>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
        {/* Topbar End */}
        {/* Sidenav Menu Start */}
        <div className="sidenav-menu">
          <div className="scrollbar" data-simplebar>
            {/* User */}
            <div className="sidenav-user text-nowrap border border-dashed rounded-3">
              <a href="#!" className="sidenav-user-name d-flex align-items-center">
                <img src="assets/images/users/user-2.jpg" width="36" className="rounded-circle me-2 d-flex" alt="user-image" />
                <span>
                  <h5 className="my-0 fw-semibold">Raj Patil </h5>
                  <h6 className="my-0 text-muted">Sales Head</h6>
                </span>
              </a>
            </div>
            {/*- Sidenav Menu */}
            <ul className="side-nav">
              <li className="side-nav-item">
                <a href="dashboard.html" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="circle-gauge"></i></span>
                  <span className="menu-text" data-lang="dashboard">Dashboard</span>
                </a>
              </li>
              <li className="side-nav-item">
                <a href="floora-ai.html" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="sparkles"></i></span>
                  <span className="menu-text"> Floora AI </span>
                  <span className="badge text-bg-primary">Phone</span>
                </a>
              </li>
              <li className="side-nav-item">
                <a href="calendar.html" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="calendar"></i></span>
                  <span className="menu-text" data-lang="calendar"> Call Calendar </span>
                </a>
              </li>
              <li className="side-nav-item">
                <a href="directory.html" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="book-user"></i></span>
                  <span className="menu-text" data-lang="directory"> Contact Directory </span>
                </a>
              </li>
              <li className="side-nav-title mt-2" data-lang="pages-title">Manage</li>
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarPages" aria-expanded="false" aria-controls="sidebarPages" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="notebook-text"></i></span>
                  <span className="menu-text" data-lang="pages"> Properties </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarPages">
                  <ul className="sub-menu">
                    <li className="side-nav-item">
                      <a href="pages-pricing.html" className="side-nav-link">
                        <span className="menu-text" data-lang="pages-pricing">Add New Property</span>
                      </a>
                    </li>
                    <li className="side-nav-item">
                      <a href="pages-empty.html" className="side-nav-link">
                        <span className="menu-text" data-lang="pages-empty">Active Properties </span>
                      </a>
                    </li>
                    <li className="side-nav-item">
                      <a href="pages-timeline.html" className="side-nav-link">
                        <span className="menu-text" data-lang="pages-timeline">Old Properties</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarPagesAuth" aria-expanded="false" aria-controls="sidebarPagesAuth" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="fingerprint"></i></span>
                  <span className="menu-text" data-lang="authentication"> Contacts </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarPagesAuth">
                  <ul className="sub-menu">
                    <li className="side-nav-item">
                      <a href="auth-sign-in.html" className="side-nav-link">
                        <span className="menu-text" data-lang="auth-sign-in">Add New Contacts</span>
                      </a>
                    </li>
                    <li className="side-nav-item">
                      <a href="auth-sign-up.html" className="side-nav-link">
                        <span className="menu-text" data-lang="auth-sign-up">Manage Contacts</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarBaseUI" aria-expanded="false" aria-controls="sidebarBaseUI" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="pencil-ruler"></i></span>
                  <span className="menu-text" data-lang="ui-components"> Calling Numbers </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarBaseUI">
                  <ul className="sub-menu">
                    <li className="side-nav-item">
                      <a href="ui-core.html" className="side-nav-link">
                        <span className="menu-text" data-lang="ui-core">Request New Number</span>
                      </a>
                    </li>
                    <li className="side-nav-item">
                      <a href="ui-interactive.html" className="side-nav-link">
                        <span className="menu-text" data-lang="ui-interactive">Manage Active Numbers</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="side-nav-item">
                <a href="charts.html" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="chart-pie"></i></span>
                  <span className="menu-text" data-lang="charts"> Reports </span>
                </a>
              </li>
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarForms" aria-expanded="false" aria-controls="sidebarForms" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="square-pi"></i></span>
                  <span className="menu-text" data-lang="forms">Call Logs</span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarForms">
                  <ul className="sub-menu">
                    <li className="side-nav-item">
                      <a href="form-elements.html" className="side-nav-link">
                        <span className="menu-text" data-lang="form-elements">All Calls</span>
                      </a>
                    </li>
                    <li className="side-nav-item">
                      <a href="form-plugins.html" className="side-nav-link">
                        <span className="menu-text" data-lang="form-plugins">Call Recordings</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarTables" aria-expanded="false" aria-controls="sidebarTables" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="table-2"></i></span>
                  <span className="menu-text" data-lang="tables">CRM</span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarTables">
                  <ul className="sub-menu">
                    <li className="side-nav-item">
                      <a href="tables-static.html" className="side-nav-link">
                        <span className="menu-text" data-lang="tables-static">Static Tables</span>
                      </a>
                    </li>
                    <li className="side-nav-item">
                      <a data-bs-toggle="collapse" href="#sidebarDataTables" aria-expanded="false" aria-controls="sidebarDataTables" className="side-nav-link">
                        <span className="menu-text" data-lang="datatables">DataTables</span>
                        <span className="badge bg-success">09</span>
                      </a>
                      <div className="collapse" id="sidebarDataTables">
                        <ul className="sub-menu">
                          <li className="side-nav-item">
                            <a href="tables-datatables-basic.html" className="side-nav-link">
                              <span className="menu-text" data-lang="tables-datatables-basic">Basic</span>
                            </a>
                          </li>
                          <li className="side-nav-item">
                            <a href="tables-datatables-export-data.html" className="side-nav-link">
                              <span className="menu-text" data-lang="tables-datatables-export-data">Export Data</span>
                            </a>
                          </li>
                          <li className="side-nav-item">
                            <a href="tables-datatables-select.html" className="side-nav-link">
                              <span className="menu-text" data-lang="tables-datatables-select">Select</span>
                            </a>
                          </li>
                          <li className="side-nav-item">
                            <a href="tables-datatables-ajax.html" className="side-nav-link">
                              <span className="menu-text" data-lang="tables-datatables-ajax">Ajax</span>
                            </a>
                          </li>
                          <li className="side-nav-item">
                            <a href="tables-datatables-javascript.html" className="side-nav-link">
                              <span className="menu-text" data-lang="tables-datatables-javascript">Javascript Source</span>
                            </a>
                          </li>
                          <li className="side-nav-item">
                            <a href="tables-datatables-rendering.html" className="side-nav-link">
                              <span className="menu-text" data-lang="tables-datatables-rendering">Data Rendering</span>
                            </a>
                          </li>
                          <li className="side-nav-item">
                            <a href="tables-datatables-columns.html" className="side-nav-link">
                              <span className="menu-text" data-lang="tables-datatables-columns">Show & Hide Column</span>
                            </a>
                          </li>
                          <li className="side-nav-item">
                            <a href="tables-datatables-child-rows.html" className="side-nav-link">
                              <span className="menu-text" data-lang="tables-datatables-child-rows">Child Rows</span>
                            </a>
                          </li>
                          <li className="side-nav-item">
                            <a href="tables-datatables-checkbox-select.html" className="side-nav-link">
                              <span className="menu-text" data-lang="tables-datatables-checkbox-select">Checkbox Select</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarSystem" aria-expanded="false" aria-controls="sidebarSystem" className="side-nav-link">
                  <span className="menu-icon"><i data-lucide="settings-2"></i></span>
                  <span className="menu-text"> System </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarSystem">
                  <ul className="sub-menu">
                    <li className="side-nav-item">
                      <a href="pages-profile.html" className="side-nav-link">
                        <span className="menu-text" data-lang="pages-profile">User Profile</span>
                      </a>
                    </li>
                    <li className="side-nav-item">
                      <a href="pages-404.html" className="side-nav-link">
                        <span className="menu-text" data-lang="pages-error">Error 404</span>
                      </a>
                    </li>
                    <li className="side-nav-item">
                      <a href="pages-500.html" className="side-nav-link">
                        <span className="menu-text" data-lang="pages-error-500">Error 500</span>
                      </a>
                    </li>
                    <li className="side-nav-item">
                      <a href="pages-starter.html" className="side-nav-link">
                        <span className="menu-text" data-lang="pages-starter">Starter Page</span>
                      </a>
                    </li>
                    <li className="side-nav-item">
                      <a href="pages-pricing.html" className="side-nav-link">
                        <span className="menu-text" data-lang="pages-pricing">Pricing</span>
                      </a>
                    </li>
                    <li className="side-nav-item">
                      <a href="pages-timeline.html" className="side-nav-link">
                        <span className="menu-text" data-lang="pages-timeline">Timeline</span>
                      </a>
                    </li>
                    <li className="side-nav-item">
                      <a href="pages-faq.html" className="side-nav-link">
                        <span className="menu-text" data-lang="pages-faq">FAQ</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="side-nav-item">
                <a href="auth-login.html" className="side-nav-link text-danger fw-bold">
                  <span className="menu-icon"><i data-lucide="log-out"></i></span>
                  <span className="menu-text">Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menu-collapse-box d-none d-xl-block">
            <button className="button-collapse-toggle">
              <i data-lucide="square-chevron-left" className="align-middle flex-shrink-0"></i>
              <span>Collapse Menu</span>
            </button>
          </div>
        </div>
        {/* Sidenav Menu End */}
        {/* ============================================================== */}
        {/* Start Main Content */}
        {/* ============================================================== */}
        <div className="content-page">
          <div className="container-fluid">
            <div className="row justify-content-center py-5">
              <div className="col-xxl-5 col-xl-7 text-center">
                <span className="badge badge-default fw-normal shadow px-2 py-1 mb-2 fst-italic fs-xxs">
                  <i data-lucide="sparkles" className="fs-sm me-1"></i> Welcome Houzing Partners
                </span>
                <h3 className="fw-bold"> August 29, 2025 Report & Statistics </h3>
                <p className="fs-md mb-0"> Last updated 12:15 PM today. </p>
              </div>
            </div>
            <div className="row row-cols-xxl-4 row-cols-md-2 row-cols-1">
              {/* Today's Prompts Widget */}
              <div className="col">
                <div className="card card-h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 className="text-uppercase">Today's Calling</h5>
                      </div>
                      <div>
                        <i data-lucide="message-square" className="text-muted fs-24 svg-sw-10"></i>
                      </div>
                    </div>
                    <div className="mb-3">
                      <canvas id="promptsChart" height="60"></canvas>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <span className="text-muted">Today</span>
                        <div className="fw-semibold"><span data-target="1,245">1,245</span> Calls</div>
                      </div>
                      <div className="text-end">
                        <span className="text-muted">Yesterday</span>
                        <div className="fw-semibold"><span data-target="1,110">1,110</span> <i className="ti ti-arrow-up"></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-muted text-center">
                    Call volumen increased by <strong>12%</strong> today.
                  </div>
                </div>
              </div>
              {/* Active Users Widget */}
              <div className="col">
                <div className="card card-h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5 className="text-uppercase mb-3">Leads Called </h5>
                        <h3 className="mb-0 fw-normal"><span data-target="342">342</span></h3>
                        <p className="text-muted mb-2">In last five hours</p>
                      </div>
                      <div>
                        <i data-lucide="users" className=" fs-24 svg-sw-10"></i>
                      </div>
                    </div>
                    <div className="progress progress-lg mb-3">
                      <div className="progress-bar" style={{ width: '68%' }} role="progressbar"></div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <span className="">Avg. Session Time</span>
                        <h5 className="mb-0">4m 12s</h5>
                      </div>
                      <div className="text-end">
                        <span className="">Returning Users</span>
                        <h5 className="mb-0">54.9%</h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    52 new users joined today
                  </div>
                </div>
              </div>
              {/* Response Accuracy Widget */}
              <div className="col">
                <div className="card card-h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 className="text-uppercase">Calling Accuracy</h5>
                      </div>
                      <div>
                        <i data-lucide="activity" className=" fs-24 svg-sw-10"></i>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <canvas id="accuracyChart" height="120" width="120"></canvas>
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    Current accuracy: <strong>94.3%</strong>
                  </div>
                </div>
              </div>
              {/* Token Consumption Widget */}
              <div className="col">
                <div className="card card-h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 className="text-uppercase">Minutes Usage</h5>
                      </div>
                      <div>
                        <i data-lucide="cpu" className="fs-24 svg-sw-10"></i>
                      </div>
                    </div>
                    <div className="mb-3">
                      <canvas id="tokenChart" height="60"></canvas>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <span className="">Today</span>
                        <div className="fw-semibold"><span data-target="185">185</span> Minutes</div>
                      </div>
                      <div className="text-end">
                        <span className="">Yesterday</span>
                        <div className="fw-semibold"><span data-target="689">689</span> <i className="ti ti-arrow-up"></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    Calling quality up by <strong>6.4%</strong> from yesterday
                  </div>
                </div>
              </div>
            </div> {/* end row*/}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      {/* AI Requests */}
                      <div className="col-xl-3 col-md-6">
                        <div className="text-center">
                          <p className="mb-4"><i data-lucide="bot"></i> Total Calls</p>
                          <h2 className="display-3 fw-bold mb-0">16,215</h2>
                          <p className="text-muted text-uppercase mb-0">
                            <i className="ti ti-arrow-up text-success"></i> <span className="text-success me-1">1.8%</span> Since Last Week
                          </p>
                        </div>
                      </div>
                      {/* Sessions */}
                      <div className="col-xl-3 col-md-6">
                        <div className="text-center">
                          <p className="mb-4"><i data-lucide="line-chart"></i> Total Active Time</p>
                          <h2 className="display-3 fw-bold mb-0">34h 55m</h2>
                          <p className="text-muted text-uppercase mb-0">
                            <i className="ti ti-arrow-up text-success"></i> <span className="text-success me-1">0.4%</span> Since Last Week
                          </p>
                        </div>
                      </div>
                      {/* Avg. Session Duration */}
                      <div className="col-xl-3 col-md-6">
                        <div className="text-center">
                          <p className="mb-4"><i data-lucide="timer"></i> Avg. Call Duration</p>
                          <h2 className="display-3 fw-bold mb-0">2.1s</h2>
                          <p className="text-muted text-uppercase mb-0">
                            <i className="ti ti-arrow-down text-danger"></i> <span className="text-danger me-1">0.6%</span> Since Last Week
                          </p>
                        </div>
                      </div>
                      {/* Bounced Rate */}
                      <div className="col-xl-3 col-md-6">
                        <div className="text-center">
                          <p className="mb-4"><i data-lucide="disc-3"></i> Hangup Rate</p>
                          <h2 className="display-3 fw-bold mb-0">5.52%</h2>
                          <p className="text-muted text-uppercase mb-0">
                            <i className="ti ti-arrow-up text-success"></i> <span className="text-success me-1">1.2%</span> Since Last Week
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Daily Revenue Chart */}
              <div className="col-xl-6">
                <div className="card">
                  <div className="card-header border-bottom d-flex align-items-center justify-content-between">
                    <h5 className="fw-semibold">Daily Minutes</h5>
                    <div className="d-flex align-items-center">
                      <div className="me-2">
                        <button className="btn btn-sm btn-soft-primary px-3 shadow-none">
                          <i className="ti ti-refresh me-1"></i> Refresh
                        </button>
                      </div>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-icon btn-soft-primary shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="ti ti-dots-vertical"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="#">Download Report</a>
                          <a className="dropdown-item" href="#">Export to Excel</a>
                          <a className="dropdown-item" href="#">Export to PDF</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <canvas id="daily-revenue-chart" height="150" className="chartsjs"></canvas>
                    </div>
                  </div>
                </div>
              </div> {/* end col*/}
              {/* Sessions by Country */}
              <div className="col-xl-6">
                <div className="card">
                  <div className="card-header border-bottom d-flex align-items-center justify-content-between">
                    <h5 className="fw-semibold">Leads by State</h5>
                    <div className="d-flex align-items-center">
                      <div className="dropdown">
                        <button className="btn btn-sm btn-icon btn-soft-primary shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="ti ti-dots-vertical"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="#">Download Report</a>
                          <a className="dropdown-item" href="#">Export to Excel</a>
                          <a className="dropdown-item" href="#">Export to PDF</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                      <div id="world-map-markers" style={{ height: '320px' }}></div>
                    </div>
                    <div className="table-responsive mt-3">
                      <table className="table table-sm table-centered text-nowrap table-hover mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>State</th>
                            <th>Leads</th>
                            <th>%</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <span className="text-truncate d-flex align-items-center">
                                <i className="fi fi-in me-1"></i>
                                <span className="fw-semibold">Maharashtra</span>
                              </span>
                            </td>
                            <td>650</td>
                            <td>85%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              <span className="text-truncate d-flex align-items-center">
                                <i className="fi fi-in me-1"></i>
                                <span className="fw-semibold">New Delhi</span>
                              </span>
                            </td>
                            <td>250</td>
                            <td>55%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              <span className="text-truncate d-flex align-items-center">
                                <i className="fi fi-in me-1"></i>
                                <span className="fw-semibold">Gujarat</span>
                              </span>
                            </td>
                            <td>150</td>
                            <td>35%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>
                              <span className="text-truncate d-flex align-items-center">
                                <i className="fi fi-in me-1"></i>
                                <span className="fw-semibold">Karnataka</span>
                              </span>
                            </td>
                            <td>50</td>
                            <td>25%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              <span className="text-truncate d-flex align-items-center">
                                <i className="fi fi-in me-1"></i>
                                <span className="fw-semibold">Uttar Pradesh</span>
                              </span>
                            </td>
                            <td>10</td>
                            <td>5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div> {/* end col*/}
            </div> {/* end row*/}
            <div className="row">
              {/* Top AI Agents */}
              <div className="col-xl-6">
                <div className="card">
                  <div className="d-flex card-header align-items-center justify-content-between">
                    <h5 className="fw-semibold">Top AI Agents</h5>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-icon btn-soft-primary shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="ti ti-dots-vertical"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">Download Report</a>
                        <a className="dropdown-item" href="#">Export to Excel</a>
                        <a className="dropdown-item" href="#">Export to PDF</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2">
                    <div className="list-group list-group-flush">
                      <a className="list-group-item list-group-item-action border-bottom" href="#!">
                        <div className="d-flex align-items-center">
                          <img src="assets/images/users/user-1.jpg" alt="User" className="avatar avatar-sm rounded-circle me-3" />
                          <div className="flex-grow-1">
                            <h5 className="my-0">Floora AI</h5>
                            <p className="mb-0 text-muted fs-xs">
                              <i className="ti ti-mail me-1"></i> Calls : <strong>231</strong>
                            </p>
                          </div>
                          <span className="badge badge-subtle-success text-success">
                            <i className="ti ti-trending-up me-1"></i> 10.5%
                          </span>
                        </div>
                      </a>
                      <a className="list-group-item list-group-item-action border-bottom" href="#!">
                        <div className="d-flex align-items-center">
                          <img src="assets/images/users/user-2.jpg" alt="User" className="avatar avatar-sm rounded-circle me-3" />
                          <div className="flex-grow-1">
                            <h5 className="my-0">IVR Agent</h5>
                            <p className="mb-0 text-muted fs-xs">
                              <i className="ti ti-mail me-1"></i> Calls : <strong>121</strong>
                            </p>
                          </div>
                          <span className="badge badge-subtle-success text-success">
                            <i className="ti ti-trending-up me-1"></i> 8.2%
                          </span>
                        </div>
                      </a>
                      <a className="list-group-item list-group-item-action border-bottom" href="#!">
                        <div className="d-flex align-items-center">
                          <img src="assets/images/users/user-3.jpg" alt="User" className="avatar avatar-sm rounded-circle me-3" />
                          <div className="flex-grow-1">
                            <h5 className="my-0">Cold Calling Agent</h5>
                            <p className="mb-0 text-muted fs-xs">
                              <i className="ti ti-mail me-1"></i> Calls : <strong>87</strong>
                            </p>
                          </div>
                          <span className="badge badge-subtle-danger text-danger">
                            <i className="ti ti-trending-down me-1"></i> 2.1%
                          </span>
                        </div>
                      </a>
                      <a className="list-group-item list-group-item-action border-bottom" href="#!">
                        <div className="d-flex align-items-center">
                          <img src="assets/images/users/user-4.jpg" alt="User" className="avatar avatar-sm rounded-circle me-3" />
                          <div className="flex-grow-1">
                            <h5 className="my-0">Warm Calling Agent</h5>
                            <p className="mb-0 text-muted fs-xs">
                              <i className="ti ti-mail me-1"></i> Calls : <strong>56</strong>
                            </p>
                          </div>
                          <span className="badge badge-subtle-success text-success">
                            <i className="ti ti-trending-up me-1"></i> 5.8%
                          </span>
                        </div>
                      </a>
                      <a className="list-group-item list-group-item-action" href="#!">
                        <div className="d-flex align-items-center">
                          <img src="assets/images/users/user-5.jpg" alt="User" className="avatar avatar-sm rounded-circle me-3" />
                          <div className="flex-grow-1">
                            <h5 className="my-0">Lead Generation Agent</h5>
                            <p className="mb-0 text-muted fs-xs">
                              <i className="ti ti-mail me-1"></i> Calls : <strong>34</strong>
                            </p>
                          </div>
                          <span className="badge badge-subtle-danger text-danger">
                            <i className="ti ti-trending-down me-1"></i> 1.1%
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project Progress */}
              <div className="col-xl-6">
                <div className="card">
                  <div className="d-flex card-header align-items-center justify-content-between">
                    <h5 className="fw-semibold">Recent Call Logs</h5>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-icon btn-soft-primary shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="ti ti-dots-vertical"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">View all</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2">
                    <div className="table-responsive">
                      <table className="table table-sm table-centered text-nowrap table-hover mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Caller ID</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td><span className="fw-semibold">Aarti Sharma</span></td>
                            <td><span className="text-muted">2023-11-20</span></td>
                            <td><span className="text-muted">10:30 AM</span></td>
                            <td><span className="text-muted">3:45</span></td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td><span className="fw-semibold">Rajesh Kumar</span></td>
                            <td><span className="text-muted">2023-11-19</span></td>
                            <td><span className="text-muted">2:15 PM</span></td>
                            <td><span className="text-muted">2:10</span></td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td><span className="fw-semibold">Pooja Singh</span></td>
                            <td><span className="text-muted">2023-11-19</span></td>
                            <td><span className="text-muted">9:00 AM</span></td>
                            <td><span className="text-muted">1:50</span></td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td><span className="fw-semibold">Amit Verma</span></td>
                            <td><span className="text-muted">2023-11-18</span></td>
                            <td><span className="text-muted">4:00 PM</span></td>
                            <td><span className="text-muted">4:30</span></td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td><span className="fw-semibold">Sunita Sharma</span></td>
                            <td><span className="text-muted">2023-11-18</span></td>
                            <td><span className="text-muted">11:45 AM</span></td>
                            <td><span className="text-muted">2:20</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* container */}
          {/* Footer Start */}
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 text-center text-md-start">
                  © {new Date().getFullYear()} <span className="fw-semibold">Floora AI</span>
                </div>
                <div className="col-md-6">
                  <div className="text-md-end d-none d-md-block">
                    Minutes Left : <span className="fw-bold">560</span>. Recharge Now
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* end Footer */}
        </div>
        {/* ============================================================== */}
        {/* End of Main Content */}
        {/* ============================================================== */}
      </div>
      {/* END wrapper */}
    </>
  );
};

export default Dashboard;