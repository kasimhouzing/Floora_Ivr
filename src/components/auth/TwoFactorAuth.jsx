import React from 'react';

const TwoFactorAuth = () => {
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
                    We've sent a 6-digit confirmation code to your email. Enter the code below to confirm your email address.
                  </p>
                </div>

                <div className="text-center w-75 m-auto mb-4">
                  <h4 className="text-dark-50 text-center mt-0 fw-bold">Enter Verification Code</h4>
                  <p className="text-muted mb-4">
                    The verification code has been sent to your email.
                  </p>
                </div>

                <form>
                  <div id="two-factor-auth-otp" className="d-flex justify-content-center">
                    <input type="text" className="form-control otp-input text-center" maxLength="1" />
                    <input type="text" className="form-control otp-input text-center" maxLength="1" />
                    <input type="text" className="form-control otp-input text-center" maxLength="1" />
                    <input type="text" className="form-control otp-input text-center" maxLength="1" />
                    <input type="text" className="form-control otp-input text-center" maxLength="1" />
                    <input type="text" className="form-control otp-input text-center" maxLength="1" />
                  </div>

                  <div className="d-grid mt-4">
                    <button type="submit" className="btn btn-primary fw-semibold py-2">
                      Confirm
                    </button>
                  </div>
                </form>

                <p className="text-muted text-center mt-4 mb-0">
                  Don't have a code?{' '}
                  <a href="javascript: void(0);" className="text-decoration-underline link-offset-3 fw-semibold">
                    Resend
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

export default TwoFactorAuth;