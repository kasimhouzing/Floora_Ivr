import React from "react";
import Layout from "../../Layout";

const AddProperty = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="page-title">Add New Property</h4>
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
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">Property Details</h4>
              <p className="text-muted font-14">Enter new property details.</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="property-name" className="form-label">
                    Property Name
                  </label>
                  <input
                    type="text"
                    id="property-name"
                    className="form-control"
                    placeholder="Enter property name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="Enter full address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="form-control"
                    placeholder="Enter price"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Property
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">Property Images</h4>
              <p className="text-muted font-14">
                Upload images for the property.
              </p>
              <div>
                <form action="#" className="dropzone">
                  <div className="fallback">
                    <input name="file" type="file" />
                  </div>
                  <div className="dz-message needsclick">
                    <i className="h1 text-muted ri-upload-cloud-2-line"></i>
                    <h3>Drop files here or click to upload.</h3>
                    <span className="text-muted font-13">
                      (This is a demo. All files are <b>not</b> saved on the
                      server.)
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddProperty;