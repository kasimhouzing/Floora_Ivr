import React from 'react';

const ResetPassword = () => {
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
                  <p className="text-muted w-lg-75 mt-3">
                    Enter your email address and we'll send you an email with instructions to reset your password.
                  </p>
                </div>

                <form>
                  <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">
                      Email address
                    </label>
                    <div className="input-group">
                      <input type="email" className="form-control" id="userEmail" placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary fw-semibold py-2">
                      Send Request
                    </button>
                  </div>
                </form>

                <p className="text-muted text-center mt-4 mb-0">
                  Return to{' '}
                  <a href="index.html" className="text-decoration-underline link-offset-3 fw-semibold">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
            <p className="text-center text-muted mt-4 mb-0">
              © {new Date().getFullYear()} Floora IVR — by <span className="fw-semibold">Floora AI</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;