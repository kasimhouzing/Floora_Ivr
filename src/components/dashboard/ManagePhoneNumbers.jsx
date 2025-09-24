import React from "react";
import Layout from "../../Layout";

const ManagePhoneNumbers = () => {
  const phoneNumbers = [
    {
      id: 1,
      number: "+1 (555) 123-4567",
      status: "Active",
      minutesUsed: "125 min",
      lastCall: "May 10, 2024",
    },
    {
      id: 2,
      number: "+1 (555) 987-6543",
      status: "Inactive",
      minutesUsed: "0 min",
      lastCall: "N/A",
    },
    {
      id: 3,
      number: "+1 (555) 555-5555",
      status: "Active",
      minutesUsed: "75 min",
      lastCall: "May 09, 2024",
    },
  ];
  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="page-title">Manage Phone Numbers</h4>
            <div className="page-title-right d-none d-sm-flex">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Floora IVR</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Phone</a>
                </li>
                <li className="breadcrumb-item active">Manage Numbers</li>
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
                      <th>Phone Number</th>
                      <th>Status</th>
                      <th>Minutes Used</th>
                      <th>Last Call</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {phoneNumbers.map((number) => (
                      <tr key={number.id}>
                        <td>{number.number}</td>
                        <td>
                          <span
                            className={`badge ${
                              number.status === "Active"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {number.status}
                          </span>
                        </td>
                        <td>{number.minutesUsed}</td>
                        <td>{number.lastCall}</td>
                        <td>
                          <a href="#!" className="btn btn-success btn-sm me-2">
                            Pause Calling
                          </a>
                          <a href="#!" className="btn btn-danger btn-sm">
                            Delete Permanently
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

export default ManagePhoneNumbers;