import React from 'react';

const Login = () => {
  return (
    <div className="auth-box overflow-hidden align-items-center d-flex">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-4 col-md-6 col-sm-8">
            <div className="card">
              <div className="card-body">
                <div className="auth-brand mb-4">
                  <a href="index.html" className="logo-dark">
                    <span className="d-flex align-items-center gap-1">
                      <span className="avatar avatar-xs rounded-circle text-bg-dark">
                        <span className="avatar-title">
                          {/* Adjusted img tag with inline style */}
                          <img
                            src="src/assets/images/logo-sm.png"
                            alt="logo"
                            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                          />
                        </span>
                      </span>
                      <span className="logo-text text-body fw-bold fs-xl">Floora IVR</span>
                    </span>
                  </a>
                  <a href="index.html" className="logo-light">
                    <span className="d-flex align-items-center gap-1">
                      <span className="avatar avatar-xs rounded-circle text-bg-dark">
                        <span className="avatar-title">
                          {/* Adjusted img tag with inline style */}
                          <img
                            src="src/assets/images/logo-sm.png"
                            alt="logo"
                            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                          />
                        </span>
                      </span>
                      <span className="logo-text text-white fw-bold fs-xl">Floora IVR</span>
                    </span>
                  </a>
                </div>

                <form action="/dashboard">
                  <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">
                      Email address
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="ti ti-mail"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="userEmail"
                        placeholder="you@example.com"
                        defaultValue="kasim@houzingpartners.com" // Added default value
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="userPassword" className="form-label">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="ti ti-lock"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        id="userPassword"
                        placeholder="••••••••"
                        defaultValue="••••••••" // Added default value
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                          Keep me signed in
                        </label>
                      </div>
                      <a href="auth-reset-pass.html" className="text-decoration-underline link-offset-3 text-muted">
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary fw-semibold py-2">
                      Sign In
                    </button>
                  </div>
                </form>

                <p className="text-muted text-center mt-4 mb-0">
                  New here?{' '}
                  <a href="/signin" className="text-decoration-underline link-offset-3 fw-semibold">
                    Create an account
                  </a>
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-muted mt-4 mb-0">
            © {new Date().getFullYear()} Floora IVR — by{' '}
            <span className="fw-semibold">Floora AI</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;