import React from 'react';

const FlooraAIChat = () => {
  return (
    <>
      <div className="wrapper">
        <header className="app-topbar">
          <div className="container-fluid topbar-menu">
            <div className="d-flex align-items-center justify-content-center gap-2">
              <div className="logo-topbar">
                <a href="index.html" className="logo-dark">
                  <span className="d-flex align-items-center gap-1">
                    <span className="avatar avatar-xs rounded-circle text-bg-dark">
                      <span className="avatar-title">
                        <i className="ti ti-sparkles fs-md"></i>
                      </span>
                    </span>
                    <span className="logo-text text-body fw-bold fs-xl">Floora IVR</span>
                  </span>
                </a>
                <a href="index.html" className="logo-light">
                  <span className="d-flex align-items-center gap-1">
                    <span className="avatar avatar-xs rounded-circle text-bg-dark">
                      <span className="avatar-title">
                        <i className="ti ti-sparkles fs-md"></i>
                      </span>
                    </span>
                    <span className="logo-text text-white fw-bold fs-xl">Floora IVR</span>
                  </span>
                </a>
              </div>
              <ul className="navbar-nav gap-2 align-items-center">
                <li className="nav-item">
                  <a className="btn btn-sm btn-light-success d-flex align-items-center gap-1 py-1 px-2 shadow-none" href="dashboard.html">
                    <i className="ti ti-arrow-left fs-md"></i>
                    Back to Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div className="content-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="d-flex align-items-center gap-2">
                        <span className="avatar avatar-md rounded-circle bg-gray-900 text-white">
                          <span className="avatar-title">
                            <i className="ti ti-sparkles fs-2xl"></i>
                          </span>
                        </span>
                        <div>
                          <h4 className="fw-semibold fs-sm mb-1">Floora IVR AI</h4>
                          <h6 className="text-muted fw-normal m-0">
                            Status: <span className="text-success">Active</span>
                          </h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge bg-primary-subtle text-primary">
                          <i className="ti ti-phone-plus fs-md me-1"></i>
                          30 mins
                        </span>
                      </div>
                    </div>
                    <div className="chat-container-inner" style={{ minHeight: '60vh' }}>
                      <div className="chat-box">
                        <div className="chat-start">
                          <div className="chat-bubble">
                            Hi, I'm Floora IVR, your personal AI real estate agent. How can I help you today?
                          </div>
                        </div>
                        <div className="chat-end">
                          <div className="chat-bubble">
                            I want to talk about a new property.
                          </div>
                        </div>
                        <div className="chat-start">
                          <div className="chat-bubble">
                            Okay, I'm listening. What do you want to talk about?
                          </div>
                        </div>
                        <div className="chat-end">
                          <div className="chat-bubble">
                            I have a new property in downtown Miami, it’s a 3-bedroom, 2-bathroom apartment.
                          </div>
                        </div>
                        <div className="chat-start">
                          <div className="chat-bubble">
                            That sounds like a great property! What's the price?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="d-flex align-items-center gap-2">
                      <input type="text" className="form-control" placeholder="Type your message here..." />
                      <button className="btn btn-dark">
                        <i className="ti ti-microphone fs-xl"></i>
                      </button>
                      <button className="btn btn-primary">
                        <i className="ti ti-send fs-xl"></i>
                      </button>
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
                    Minutes Left <span className="fw-bold">689</span> Recharge Now.
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default FlooraAIChat;