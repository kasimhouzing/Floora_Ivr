import React from 'react';

const NewPassword = () => {
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
                      <span className="logo-text text-body fw-bold fs-xl">Simple</span>
                    </span>
                  </a>
                  <a href="index.html" className="logo-light">
                    <span className="d-flex align-items-center gap-1">
                      <span className="avatar avatar-xs rounded-circle text-bg-dark">
                        <span className="avatar-title">
                          <i className="ti ti-sparkles fs-md"></i>
                        </span>
                      </span>
                      <span className="logo-text text-white fw-bold fs-xl">Simple</span>
                    </span>
                  </a>
                  <p className="text-muted mt-3">We've emailed you a 6-digit verification code. Please enter it below to confirm your email address</p>
                </div>

                <form>
                  <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">
                      Email address <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="email" className="form-control" id="userEmail" placeholder="you@example.com" disabled />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                      New Password <span className="text-danger">*</span>
                    </label>
                    <div className="input-group auth-pass-inputgroup">
                      <input type="password" className="form-control" id="newPassword" placeholder="Enter your password" required />
                      <button className="btn btn-light" type="button" id="password-addon-new">
                        <i className="ti ti-eye"></i>
                      </button>
                    </div>
                    <small className="text-muted">
                      Password strength: <span id="password-strength-new"></span>
                    </small>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password <span className="text-danger">*</span>
                    </label>
                    <div className="input-group auth-pass-inputgroup">
                      <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter your password" required />
                      <button className="btn btn-light" type="button" id="password-addon-confirm">
                        <i className="ti ti-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary fw-semibold py-2">
                      Change Password
                    </button>
                  </div>
                </form>

                <p className="mt-4 text-muted text-center mb-4">
                  Don’t have a code?{' '}
                  <a href="#" className="text-decoration-underline link-offset-2 fw-semibold">
                    Resend
                  </a>{' '}
                  or{' '}
                  <a href="#" className="text-decoration-underline link-offset-2 fw-semibold">
                    Call Us
                  </a>
                </p>
                <p className="text-muted text-center mb-0">
                  Return to{' '}
                  <a href="auth-sign-in.html" className="text-decoration-underline link-offset-3 fw-semibold">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
            <p className="text-center text-muted mt-4 mb-0">
              © {new Date().getFullYear()} Simple — by <span className="fw-semibold">Coderthemes</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;