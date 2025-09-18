import React from 'react';

const AddProperty = () => {
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
                  <h4 className="page-title">Add Property</h4>
                  <div className="page-title-right d-none d-sm-flex">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Floora IVR</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Properties</a>
                      </li>
                      <li className="breadcrumb-item active">Add Property</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h5 className="mt-0">
                        <i className="ri-building-line me-1"></i> Add Property
                      </h5>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="property-name">
                          Property Name
                        </label>
                        <input
                          type="text"
                          id="property-name"
                          className="form-control"
                          placeholder="Property Name"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="property-address">
                          Property Address
                        </label>
                        <input
                          type="text"
                          id="property-address"
                          className="form-control"
                          placeholder="Property Address"
                        />
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary fw-semibold py-2">
                          Add Property
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h5 className="mt-0">
                        <i className="ri-upload-cloud-2-line me-1"></i> Upload Property Images
                      </h5>
                      <span className="badge bg-danger rounded-pill">
                        Max Size: 10MB
                      </span>
                    </div>
                    <form action="#" className="dropzone">
                      <div className="fallback">
                        <input name="file" type="file" />
                      </div>
                      <div className="dz-message needsclick">
                        <i className="h1 text-muted ri-upload-cloud-2-line"></i>
                        <h3>Drop files here or click to upload.</h3>
                        <span className="text-muted font-13">
                          (This is a demo. All files are **not** saved on the server.)
                        </span>
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

export default AddProperty;