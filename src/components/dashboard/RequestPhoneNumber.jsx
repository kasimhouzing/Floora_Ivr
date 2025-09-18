import React from 'react';

const RequestPhoneNumber = () => {
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
                  <h4 className="page-title">Request Phone Number</h4>
                  <div className="page-title-right d-none d-sm-flex">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Floora IVR</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Phone</a>
                      </li>
                      <li className="breadcrumb-item active">Request Number</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="mb-3">
                      <i className="ri-phone-fill"></i> Request New Phone Number
                    </h5>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="country-selector" className="form-label">
                          Select a country
                        </label>
                        <select className="form-select" id="country-selector">
                          <option>Select</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone-number" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone-number"
                          placeholder="Search for a number..."
                        />
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary fw-semibold py-2">
                          Request Number
                        </button>
                      </div>
                    </form>
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

export default RequestPhoneNumber;