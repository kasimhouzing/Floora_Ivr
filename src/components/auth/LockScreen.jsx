import React from 'react';
import userImage from '../../assets/images/users/user-2.jpg';

const LockScreen = () => {
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
                </div>

                <div className="text-center w-75 m-auto mb-4">
                  <h4 className="text-dark-50 text-center mt-0 fw-bold">Hi ! Samy C.</h4>
                  <p className="text-muted mb-4">
                    Enter your password to access the admin.
                  </p>
                </div>

                <div className="text-center">
                  <div className="row justify-content-center">
                    <div className="col-6">
                      <img src={userImage} alt="user-img" className="rounded-circle avatar-lg" />
                    </div>
                  </div>
                </div>

                <form>
                  <div className="mb-3">
                    <label htmlFor="userPassword" className="form-label">
                      Password
                    </label>
                    <div className="input-group">
                      <input type="password" className="form-control" id="userPassword" placeholder="••••••••" required />
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary fw-semibold py-2">
                      Unlock
                    </button>
                  </div>
                </form>

                <p className="text-muted text-center mt-4 mb-0">
                  Not you? Return to{' '}
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

export default LockScreen;