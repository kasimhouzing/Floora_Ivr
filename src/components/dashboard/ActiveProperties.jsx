import React from "react";
import Layout from "../../Layout";

const ActiveProperties = () => {
  const properties = [
    {
      id: 1,
      name: "Property One",
      status: "Active",
      date: "May 10, 2024",
    },
    {
      id: 2,
      name: "Property Two",
      status: "Active",
      date: "May 10, 2024",
    },
  ];

  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="page-title">Active Properties</h4>
            <div className="page-title-right d-none d-sm-flex">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Floora IVR</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Properties</a>
                </li>
                <li className="breadcrumb-item active">Active Properties</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered dt-responsive nowrap">
                  <thead>
                    <tr>
                      <th>Property Name</th>
                      <th>Status</th>
                      <th>Creation Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((property) => (
                      <tr key={property.id}>
                        <td>{property.name}</td>
                        <td>
                          <span className="badge bg-success">
                            {property.status}
                          </span>
                        </td>
                        <td>{property.date}</td>
                        <td>
                          <a
                            href="javascript: void(0);"
                            className="text-body fw-semibold"
                          >
                            <i className="ri-delete-bin-line"></i> Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActiveProperties;