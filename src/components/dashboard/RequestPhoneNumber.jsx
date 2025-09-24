import React from "react";
import Layout from "../../Layout";

const RequestPhoneNumber = () => {
  return (
    <Layout>
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
              <h4 className="header-title">Request a New Phone Number</h4>
              <p className="text-muted font-14">
                Request a new phone number to use with Floora AI.
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="country-code" className="form-label">
                    Country Code
                  </label>
                  <select className="form-select" id="country-code">
                    <option value="">Select a country</option>
                    <option value="us">United States (+1)</option>
                    <option value="ca">Canada (+1)</option>
                    <option value="gb">United Kingdom (+44)</option>
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
                  <button
                    type="submit"
                    className="btn btn-primary fw-semibold py-2"
                  >
                    Request Number
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RequestPhoneNumber;