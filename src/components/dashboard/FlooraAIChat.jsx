import React from 'react';
import Layout from '../../Layout';

const FlooraAiChat = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="page-title">Floora AI Chat</h4>
            <div className="page-title-right d-none d-sm-flex">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Floora IVR</a>
                </li>
                <li className="breadcrumb-item active">Floora AI Chat</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-9 col-lg-8">
          <div className="card d-flex flex-column h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="header-title mb-0">Chat</h4>
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-light">
                    <i className="ti ti-share fs-20"></i>
                  </button>
                  <button type="button" className="btn btn-sm btn-light">
                    <i className="ti ti-download fs-20"></i>
                  </button>
                  <button type="button" className="btn btn-sm btn-light">
                    <i className="ti ti-printer fs-20"></i>
                  </button>
                  <button type="button" className="btn btn-sm btn-light">
                    <i className="ti ti-trash fs-20"></i>
                  </button>
                </div>
              </div>
              <div className="chat-content overflow-y-scroll" style={{ height: '70vh' }}>
                <div className="d-flex align-items-end mb-4">
                  <div className="flex-shrink-0 me-2">
                    <span className="avatar avatar-sm rounded-circle text-bg-light">
                      <span className="avatar-title rounded-circle">
                        <i className="ti ti-robot fs-20"></i>
                      </span>
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <div className="w-fit-content card card-body mb-0 px-3 py-2 border-0 bg-primary-subtle shadow-none">
                      <p className="mb-0 text-primary">Hello, how can I help you today?</p>
                    </div>
                    <span className="fs-12 text-muted fw-normal">10:00 AM</span>
                  </div>
                </div>

                <div className="d-flex align-items-end flex-row-reverse mb-4">
                  <div className="flex-shrink-0 ms-2">
                    <span className="avatar avatar-sm rounded-circle text-bg-light">
                      <span className="avatar-title rounded-circle">
                        <i className="ti ti-user fs-20"></i>
                      </span>
                    </span>
                  </div>
                  <div className="flex-grow-1 text-end">
                    <div className="w-fit-content d-inline-block card card-body mb-0 px-3 py-2 border-0 bg-light-subtle shadow-none">
                      <p className="mb-0 text-body-secondary">What are my active properties?</p>
                    </div>
                    <span className="fs-12 text-muted fw-normal">10:00 AM</span>
                  </div>
                </div>

                <div className="d-flex align-items-end mb-4">
                  <div className="flex-shrink-0 me-2">
                    <span className="avatar avatar-sm rounded-circle text-bg-light">
                      <span className="avatar-title rounded-circle">
                        <i className="ti ti-robot fs-20"></i>
                      </span>
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <div className="w-fit-content card card-body mb-0 px-3 py-2 border-0 bg-primary-subtle shadow-none">
                      <p className="mb-0 text-primary">You have 2 active properties: Property One and Property Two.</p>
                    </div>
                    <span className="fs-12 text-muted fw-normal">10:01 AM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer py-3 border-top border-light-subtle">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-light border-0"
                  placeholder="Ask me anything..."
                  aria-label="Ask me anything"
                />
                <button className="btn btn-primary" type="button">
                  <i className="ti ti-send"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-3 col-lg-4">
          <div className="card d-flex flex-column h-100">
            <div className="card-header border-bottom border-light-subtle">
              <h4 className="header-title mb-0">Summary</h4>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <h5 className="fs-14 fw-bold">Daily Report</h5>
                <p className="text-muted mb-0">
                  <i className="ti ti-check text-success me-1"></i> Yesterday, 25 new inquiries were handled.
                </p>
                <p className="text-muted mb-0">
                  <i className="ti ti-check text-success me-1"></i> 5 new properties were added.
                </p>
              </div>

              <div className="mb-3">
                <h5 className="fs-14 fw-bold">Notifications</h5>
                <p className="text-muted mb-0">
                  <i className="ti ti-bell-ring-2 text-warning me-1"></i> You have a new message from a lead.
                </p>
                <p className="text-muted mb-0">
                  <i className="ti ti-alert-circle text-danger me-1"></i> A call to property "123 Main St" failed to connect.
                </p>
              </div>

              <div className="mb-3">
                <h5 className="fs-14 fw-bold">Contact Person</h5>
                <div className="d-flex align-items-center mt-2">
                  <img
                    src="https://via.placeholder.com/48x48.png?text=User"
                    alt="Contact Person"
                    className="rounded-circle avatar-sm"
                  />
                  <div className="ms-2">
                    <h5 className="mb-0 fs-15">John Doe</h5>
                    <p className="text-muted mb-0 fs-13">Support Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FlooraAiChat;