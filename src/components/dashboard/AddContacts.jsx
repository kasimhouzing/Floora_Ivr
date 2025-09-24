import React from "react";
import Layout from "../../Layout";

const AddContacts = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="page-title">Add New Contact</h4>
            <div className="page-title-right d-none d-sm-flex">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Floora IVR</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Contacts</a>
                </li>
                <li className="breadcrumb-item active">Add Contacts</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">Single Contact</h4>
              <p className="text-muted font-14">
                Add a new contact manually.
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="Enter phone number"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Contact
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">Bulk Import</h4>
              <p className="text-muted font-14">
                Import multiple contacts using a file.
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
                      (This is a demo. All files are **not** saved on the
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

export default AddContacts;