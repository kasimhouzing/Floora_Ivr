import React from 'react';

const OldProperties = () => {
  return (
    <div className="wrapper">
      <header className="app-topbar">
        <div className="container-fluid topbar-menu">
          <div className="d-flex align-items-center justify-content-center gap-2">
            {/* ... Content remains the same as in your HTML file ... */}
          </div>
        </div>
      </header>

      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="page-title">Old Properties</h4>
                  <div className="page-title-right d-none d-sm-flex">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Floora IVR</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Properties</a>
                      </li>
                      <li className="breadcrumb-item active">Old Properties</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h5 className="mt-0">
                        <i className="ri-building-line me-1"></i> Old Properties
                      </h5>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-centered table-nowrap table-hover mb-0">
                        <thead>
                          <tr>
                            <th>Property Name</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Date Added</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span className="fw-semibold text-primary">Sunset Villa</span>
                            </td>
                            <td>123 Sunshine Blvd, Miami, FL</td>
                            <td>
                              <span className="badge bg-danger">Inactive</span>
                            </td>
                            <td>Apr 20, 2023</td>
                            <td>
                              <a href="javascript: void(0);" className="text-body fw-semibold">
                                <i className="ri-delete-bin-line"></i> Delete
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default OldProperties;