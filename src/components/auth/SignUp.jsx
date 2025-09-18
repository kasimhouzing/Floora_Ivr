import React from 'react';
import '../dashboard/Dashboard'
const SignUp = () => {
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
                    Let’s get you started. Create your account by entering your details below.
                  </p>
                </div>

                <form>
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="userName" placeholder="Your name" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">
                      Email address <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="email" className="form-control" id="userEmail" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="userPassword" className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="input-group auth-pass-inputgroup">
                      <input type="password" className="form-control" id="userPassword" placeholder="Enter your password" required />
                      <button className="btn btn-light" type="button" id="password-addon">
                        <i className="ti ti-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="termAndPolicy" />
                      <label className="form-check-label" htmlFor="termAndPolicy">
                        I agree to the{' '}
                        <a href="javascript: void(0);" className="text-decoration-underline">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary fw-semibold py-2">
                      Create Account
                    </button>
                  </div>
                </form>

                <p className="text-muted text-center mt-4 mb-0">
                  Already have an account?{' '}
                  <a href="/dashboard" className="text-decoration-underline link-offset-3 fw-semibold">
                    Sign In
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

export default SignUp;