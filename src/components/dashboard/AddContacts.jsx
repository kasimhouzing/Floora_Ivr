import React, { useEffect, useState } from "react";

const AddContacts = () => {
  const [activeCollapse, setActiveCollapse] = useState("sidebarPagesAuth");

  useEffect(() => {
    // This script block corresponds to the original <script> for the theme dropdown.
    // It's moved here to ensure the DOM elements are available.
    // However, since it relies on window.config and other global variables,
    // the external script files must be loaded first.
    (function () {
      // Skin Dropdown
      document
        .querySelectorAll('[data-dropdown="custom"]')
        .forEach((dropdown) => {
          const trigger = dropdown.querySelector(
            'a[data-bs-toggle="dropdown"], button[data-bs-toggle="dropdown"]'
          );
          const items = dropdown.querySelectorAll("button[data-skin]");

          const triggerImg = trigger.querySelector("[data-trigger-img]");
          const triggerLabel = trigger.querySelector("[data-trigger-label]");

          // Check if window.config exists before trying to parse it
          if (window.config) {
            try {
              const config = JSON.parse(JSON.stringify(window.config));
              const currentSkin = config.skin;

              items.forEach((item) => {
                const itemSkin = item.getAttribute("data-skin");
                const itemImg = item.querySelector("img")?.getAttribute("src");
                const itemText = item.querySelector("span")?.textContent.trim();

                if (itemSkin === currentSkin) {
                  item.classList.add("drop-custom-active");
                  if (triggerImg && itemImg)
                    triggerImg.setAttribute("src", itemImg);
                  if (triggerLabel && itemText)
                    triggerLabel.textContent = itemText;
                } else {
                  item.classList.remove("drop-custom-active");
                }

                item.addEventListener("click", function () {
                  items.forEach((i) =>
                    i.classList.remove("drop-custom-active")
                  );
                  this.classList.add("drop-custom-active");

                  const newImg = this.querySelector("img")?.getAttribute("src");
                  const newText =
                    this.querySelector("span")?.textContent.trim();

                  if (triggerImg && newImg)
                    triggerImg.setAttribute("src", newImg);
                  if (triggerLabel && newText)
                    triggerLabel.textContent = newText;

                  if (typeof layoutCustomizer !== "undefined") {
                    layoutCustomizer.changeSkin(itemSkin);
                  }
                });
              });
            } catch (e) {
              console.error("Failed to parse window.config:", e);
            }
          } else {
            console.warn(
              "window.config not found. Theme dropdown may not function as expected."
            );
          }
        });
    })();

    // Original script block for sidenav and icons.
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  const handleCollapseToggle = (id) => {
    setActiveCollapse(activeCollapse === id ? null : id);
  };

  return (
    <div className="wrapper">
      {/* Topbar Start */}
      <header className="app-topbar">
        <div className="container-fluid topbar-menu">
          <div className="d-flex align-items-center justify-content-center gap-2">
            {/* Topbar Brand Logo */}
            <div className="logo-topbar">
              <a href="index.html" className="logo-dark">
                <span className="d-flex align-items-center gap-1">
                  <span className="avatar avatar-xs rounded-circle text-bg-dark">
                    <span className="avatar-title">
                      <i data-lucide="sparkles" className="fs-md"></i>
                    </span>
                  </span>
                  <span className="logo-text text-body fw-bold fs-xl">
                    <fieldset>Floora IVR </fieldset>
                  </span>
                </span>
              </a>
              <a href="index.html" className="logo-light">
                <span className="d-flex align-items-center gap-1">
                  <span className="avatar avatar-xs rounded-circle text-bg-dark">
                    <span className="avatar-title">
                      <i data-lucide="sparkles" className="fs-md"></i>
                    </span>
                  </span>
                  <span className="logo-text text-white fw-bold fs-xl">
                    Floora IVR{" "}
                  </span>
                </span>
              </a>
            </div>
            <div className="d-lg-none d-flex mx-1">
              <a href="index.html">
                <img
                  src="src/assets/images/logo-sm.png"
                  height="28"
                  alt="Logo"
                />
              </a>
            </div>
            {/* Sidebar Hover Menu Toggle Button */}
            <button className="button-collapse-toggle d-xl-none">
              <i data-lucide="menu" className="fs-22 align-middle"></i>
            </button>
            {/* Topbar Link Item */}
            <div className="topbar-item d-none d-lg-flex">
              <a
                href="#!"
                className="topbar-link btn shadow-none btn-link px-2 disabled"
              >
                {" "}
                v1.0.0
              </a>
            </div>
            {/* Topbar Link Item */}
            <div className="topbar-item d-none d-lg-flex">
              <a
                href="#!"
                className="topbar-link btn shadow-none btn-link px-2"
              >
                {" "}
                Support
              </a>
            </div>
          </div>{" "}
          {/* .d-flex*/}
          <div className="d-flex align-items-center gap-2">
            {/* Search */}
            <div className="app-search d-none d-xl-flex me-xl-2">
              <input
                type="search"
                className="form-control topbar-search"
                name="search"
                placeholder="Search for something..."
              />
              <i data-lucide="search" className="app-search-icon text-muted"></i>
            </div>
            {/* Theme Dropdown */}
            <div className="topbar-item me-2" style={{ marginRight: "20px" }}>
              <div className="dropdown" data-dropdown="custom">
                <button
                  className="topbar-link fw-semibold"
                  data-bs-toggle="dropdown"
                  data-bs-offset="0,19"
                  type="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <img
                    data-trigger-img
                    src="assets/images/themes/shadcn.svg"
                    alt="user-image"
                    className="w-100 rounded me-2"
                    height="18"
                  />
                  <span data-trigger-label className="text-nowrap">
                    {" "}
                    Change Theme{" "}
                  </span>
                  <span
                    className="dot-blink"
                    aria-label="live status indicator"
                  ></span>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-1">
                  <div
                    className="h-100"
                    style={{ maxHeight: "250px" }}
                    data-simplebar
                  >
                    <div className="row g-0">
                      <div className="col-md-6">
                        <button
                          className="dropdown-item position-relative drop-custom-active"
                          data-skin="shadcn"
                        >
                          <img
                            src="assets/images/themes/shadcn.svg"
                            alt=""
                            className="me-1 rounded"
                            height="18"
                          />
                          <span className="align-middle">Shadcn</span>
                        </button>
                        <button
                          className="dropdown-item position-relative"
                          data-skin="corporate"
                        >
                          <img
                            src="assets/images/themes/corporate.svg"
                            alt=""
                            className="me-1 rounded"
                            height="18"
                          />
                          <span className="align-middle">Corporate</span>
                        </button>
                        <button
                          className="dropdown-item position-relative"
                          data-skin="nature"
                        >
                          <img
                            src="assets/images/themes/nature.svg"
                            alt=""
                            className="me-1 rounded"
                            height="18"
                          />
                          <span className="align-middle">Nature</span>
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button
                          className="dropdown-item position-relative"
                          data-skin="ghibli"
                        >
                          <img
                            src="assets/images/themes/ghibli.svg"
                            alt=""
                            className="me-1 rounded"
                            height="18"
                          />
                          <span className="align-middle">Ghibli</span>
                        </button>
                        <button
                          className="dropdown-item position-relative"
                          data-skin="material"
                        >
                          <img
                            src="assets/images/themes/material.svg"
                            alt=""
                            className="me-1 rounded"
                            height="18"
                          />
                          <span className="align-middle">
                            Material Design
                          </span>
                        </button>
                        <button
                          className="dropdown-item position-relative"
                          data-skin="pastel"
                        >
                          <img
                            src="assets/images/themes/pastel.svg"
                            alt=""
                            className="me-1 rounded"
                            height="18"
                          />
                          <span className="align-middle">Pastel Pop</span>
                        </button>
                        <button
                          className="dropdown-item position-relative"
                          data-skin="redshift"
                        >
                          <img
                            src="assets/images/themes/redshift.svg"
                            alt=""
                            className="me-1 rounded"
                            height="18"
                          />
                          <span className="align-middle">Red</span>
                        </button>
                      </div>
                    </div>{" "}
                    {/* end row*/}
                  </div>{" "}
                  {/* end .h-100*/}
                </div>{" "}
                {/* .dropdown-menu*/}
              </div>{" "}
              {/* end dropdown*/}
            </div>{" "}
            {/* end topbar item*/}
            {/* Notification Dropdown */}
            <div className="topbar-item" style={{ marginRight: "20px" }}>
              <div className="dropdown">
                <button
                  className="topbar-link dropdown-toggle drop-arrow-none"
                  data-bs-toggle="dropdown"
                  data-bs-offset="0,19"
                  type="button"
                  data-bs-auto-close="outside"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <i data-lucide="bell" className="fs-xxl"></i>
                  <span className="badge badge-square text-bg-success topbar-badge">
                    9
                  </span>
                </button>
                <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                  <div className="px-3 py-2 border-bottom">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0 fs-md fw-semibold">Notifications</h6>
                      </div>
                      <div className="col text-end">
                        <a
                          href="#!"
                          className="badge text-bg-light badge-label py-1"
                        >
                          9 Alerts
                        </a>
                      </div>
                    </div>
                  </div>
                  <div style={{ maxHeight: "300px" }} data-simplebar>
                    {/* item 1 */}
                    <div
                      className="dropdown-item notification-item py-2 text-wrap"
                      id="notification-1"
                    >
                      <span className="d-flex gap-2">
                        <span className="avatar-md flex-shrink-0">
                          <span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-22">
                            <i
                              data-lucide="cloud-cog"
                              className="fs-xl fill-primary"
                            ></i>
                          </span>
                        </span>
                        <span className="flex-grow-1 text-muted">
                          <span className="fw-medium text-body">
                            Backup completed successfully
                          </span>
                          <br />
                          <span className="fs-xs">Just now</span>
                        </span>
                        <button
                          type="button"
                          className="flex-shrink-0 text-muted btn shadow-none btn-link p-0"
                          data-dismissible="#notification-1"
                        >
                          <i data-lucide="circle-x" className="fs-xxl"></i>
                        </button>
                      </span>
                    </div>
                    {/* item 2 */}
                    <div
                      className="dropdown-item notification-item py-2 text-wrap"
                      id="notification-2"
                    >
                      <span className="d-flex gap-2">
                        <span className="avatar-md flex-shrink-0">
                          <span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-22">
                            <i
                              data-lucide="bug"
                              className="fs-xl fill-primary"
                            ></i>
                          </span>
                        </span>
                        <span className="flex-grow-1 text-muted">
                          <span className="fw-medium text-body">
                            New bug reported in Payment Module
                          </span>
                          <br />
                          <span className="fs-xs">8 minutes ago</span>
                        </span>
                        <button
                          type="button"
                          className="flex-shrink-0 text-muted btn shadow-none btn-link p-0"
                          data-dismissible="#notification-2"
                        >
                          <i data-lucide="circle-x" className="fs-xxl"></i>
                        </button>
                      </span>
                    </div>
                    {/* item 3 */}
                    <div
                      className="dropdown-item notification-item py-2 text-wrap active"
                      id="message-1"
                    >
                      <span className="d-flex gap-2">
                        <span className="flex-shrink-0">
                          <img
                            src="assets/images/users/user-3.jpg"
                            className="avatar-md rounded-circle"
                            alt="User Avatar"
                          />
                        </span>
                        <span className="flex-grow-1 text-muted">
                          <span className="fw-medium text-body">
                            Olivia Bennett
                          </span>{" "}
                          shared a new report in{" "}
                          <span className="fw-medium text-body">
                            Weekly Planning
                          </span>
                          <br />
                          <span className="fs-xs">2 minutes ago</span>
                        </span>
                        <button
                          type="button"
                          className="flex-shrink-0 text-muted btn shadow-none btn-link p-0"
                          data-dismissible="#message-1"
                        >
                          <i data-lucide="circle-x" className="fs-xxl"></i>
                        </button>
                      </span>
                    </div>
                    {/* item 4 */}
                    <div
                      className="dropdown-item notification-item py-2 text-wrap"
                      id="message-2"
                    >
                      <span className="d-flex gap-2">
                        <span className="flex-shrink-0">
                          <img
                            src="src/assets/images/users/user-4.jpg"
                            className="avatar-md rounded-circle"
                            alt="User Avatar"
                          />
                        </span>
                        <span className="flex-grow-1 text-muted">
                          <span className="fw-medium text-body">
                            Lucas Gray
                          </span>{" "}
                          mentioned you in{" "}
                          <span className="fw-medium text-body">
                            Sprint Standup
                          </span>
                          <br />
                          <span className="fs-xs">14 minutes ago</span>
                        </span>
                        <button
                          type="button"
                          className="flex-shrink-0 text-muted btn shadow-none btn-link p-0"
                          data-dismissible="#message-2"
                        >
                          <i data-lucide="circle-x" className="fs-xxl"></i>
                        </button>
                      </span>
                    </div>
                    {/* item 5 */}
                    <div
                      className="dropdown-item notification-item py-2 text-wrap"
                      id="message-3"
                    >
                      <span className="d-flex gap-2">
                        <span className="avatar-md flex-shrink-0">
                          <span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-22">
                            <i
                              data-lucide="file-warning"
                              className="fs-22 fill-primary"
                            ></i>
                          </span>
                        </span>
                        <span className="flex-grow-1 text-muted">
                          Security policy update required for your account
                          <br />
                          <span className="fs-xs">22 minutes ago</span>
                        </span>
                        <button
                          type="button"
                          className="flex-shrink-0 text-muted btn shadow-none btn-link p-0"
                          data-dismissible="#message-3"
                        >
                          <i data-lucide="circle-x" className="fs-xxl"></i>
                        </button>
                      </span>
                    </div>
                    {/* item 6 */}
                    <div
                      className="dropdown-item notification-item py-2 text-wrap"
                      id="notification-6"
                    >
                      <span className="d-flex gap-2">
                        <span className="avatar-md flex-shrink-0">
                          <span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-22">
                            <i
                              data-lucide="mail"
                              className="fs-xl fill-primary"
                            ></i>
                          </span>
                        </span>
                        <span className="flex-grow-1 text-muted">
                          <span className="fw-medium text-body">
                            You've received a new support ticket
                          </span>
                          <br />
                          <span className="fs-xs">18 minutes ago</span>
                        </span>
                        <button
                          type="button"
                          className="flex-shrink-0 text-muted btn shadow-none btn-link p-0"
                          data-dismissible="#notification-6"
                        >
                          <i data-lucide="circle-x" className="fs-xxl"></i>
                        </button>
                      </span>
                    </div>
                    {/* item 7 */}
                    <div
                      className="dropdown-item notification-item py-2 text-wrap"
                      id="notification-7"
                    >
                      <span className="d-flex gap-2">
                        <span className="avatar-md flex-shrink-0">
                          <span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-22">
                            <i
                              data-lucide="calendar-clock"
                              className="fs-xl fill-primary"
                            ></i>
                          </span>
                        </span>
                        <span className="flex-grow-1 text-muted">
                          <span className="fw-medium text-body">
                            System maintenance starts at 12 AM
                          </span>
                          <br />
                          <span className="fs-xs">1 hour ago</span>
                        </span>
                        <button
                          type="button"
                          className="flex-shrink-0 text-muted btn shadow-none btn-link p-0"
                          data-dismissible="#notification-7"
                        >
                          <i data-lucide="circle-x" className="fs-xxl"></i>
                        </button>
                      </span>
                    </div>
                  </div>{" "}
                  {/* end dropdown */}
                  {/* All*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item text-center text-reset text-decoration-underline link-offset-2 fw-bold notify-item border-top border-light py-2"
                  >
                    View All Notifications
                  </a>
                </div>
              </div>
            </div>
            {/* User Dropdown */}
            <div className="topbar-item nav-user">
              <div className="dropdown">
                <a
                  className="topbar-link dropdown-toggle drop-arrow-none px-2"
                  data-bs-toggle="dropdown"
                  data-bs-offset="0,13"
                  href="#!"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/users/user-2.jpg"
                    width="32"
                    className="rounded-circle d-flex"
                    alt="user-image"
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* Header */}
                  <div className="dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome back!</h6>
                  </div>
                  {/* My Profile */}
                  <a href="#!" className="dropdown-item">
                    <i className="ti ti-user-circle me-2 fs-17 align-middle"></i>
                    <span className="align-middle">Profile</span>
                  </a>
                  {/* Notifications */}
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="ti ti-bell-ringing me-2 fs-17 align-middle"></i>
                    <span className="align-middle">Notifications</span>
                  </a>
                  {/* Wallet */}
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="ti ti-credit-card me-2 fs-17 align-middle"></i>
                    <span className="align-middle">
                      Balance: <span className="fw-semibold">Rs 1985.25</span>
                    </span>
                  </a>
                  {/* Settings */}
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="ti ti-settings-2 me-2 fs-17 align-middle"></i>
                    <span className="align-middle">Account Settings</span>
                  </a>
                  {/* Support */}
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="ti ti-headset me-2 fs-17 align-middle"></i>
                    <span className="align-middle">Support Center</span>
                  </a>
                  {/* Divider */}
                  <div className="dropdown-divider"></div>
                  {/* Lock */}
                  <a href="auth-lock-screen.html" className="dropdown-item">
                    <i className="ti ti-lock me-2 fs-17 align-middle"></i>
                    <span className="align-middle">Lock Screen</span>
                  </a>
                  {/* Logout */}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item text-danger fw-semibold"
                  >
                    <i className="ti ti-logout-2 me-2 fs-17 align-middle"></i>
                    <span className="align-middle">Log Out</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Topbar End */}
      {/* Sidenav Menu Start */}
      <div className="sidenav-menu">
        <div className="scrollbar" data-simplebar>
          {/* User */}
          <div
            className="sidenav-user text-nowrap"
            style={{
              border: "1px solid #dee2e6",
              borderRadius: "0.5rem",
              borderStyle: "dashed",
              padding: "1rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            <a
              href="#!"
              className="sidenav-user-name d-flex align-items-center justify-content-center"
            >
              <img
                src="assets/images/users/user-2.jpg"
                width="36"
                className="rounded-circle me-2 d-flex"
                alt="user-image"
              />
              <span>
                <h5 className="my-0 fw-semibold">Raj Patil </h5>
                <h6 className="my-0 text-muted">Sales Head</h6>
              </span>
            </a>
          </div>
          {/*- Sidenav Menu */}
          <ul
            className="side-nav"
            style={{ listStyle: "none", padding: "0", margin: "0" }}
          >
            <li className="side-nav-item" style={{ marginBottom: "0.5rem" }}>
              <a
                href="dashboard.html"
                className="side-nav-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.25rem",
                  color: "#6c757d",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                <span
                  className="menu-icon"
                  style={{ marginRight: "0.75rem" }}
                >
                  <i data-lucide="circle-gauge"></i>
                </span>
                <span className="menu-text" data-lang="dashboard">
                  Dashboard
                </span>
              </a>
            </li>
            <li className="side-nav-item" style={{ marginBottom: "0.5rem" }}>
              <a
                href="floora-ai.html"
                className="side-nav-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.25rem",
                  color: "#6c757d",
                  textDecoration: "none",
                }}
              >
                <span
                  className="menu-icon"
                  style={{ marginRight: "0.75rem" }}
                >
                  <i data-lucide="sparkles"></i>
                </span>
                <span className="menu-text"> Floora AI </span>
                <span
                  className="badge text-bg-primary"
                  style={{
                    marginLeft: "auto",
                    fontSize: "0.625rem",
                    padding: "0.25em 0.5em",
                    borderRadius: "0.25rem",
                    backgroundColor: "#0d6efd",
                    color: "#fff",
                  }}
                >
                  {" "}
                  Phone{" "}
                </span>
              </a>
            </li>
            <li className="side-nav-item" style={{ marginBottom: "0.5rem" }}>
              <a
                href="calendar.html"
                className="side-nav-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.25rem",
                  color: "#6c757d",
                  textDecoration: "none",
                }}
              >
                <span
                  className="menu-icon"
                  style={{ marginRight: "0.75rem" }}
                >
                  <i data-lucide="calendar"></i>
                </span>
                <span className="menu-text" data-lang="calendar">
                  {" "}
                  Call Calendar{" "}
                </span>
              </a>
            </li>
            <li className="side-nav-item" style={{ marginBottom: "0.5rem" }}>
              <a
                href="directory.html"
                className="side-nav-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.25rem",
                  color: "#6c757d",
                  textDecoration: "none",
                }}
              >
                <span
                  className="menu-icon"
                  style={{ marginRight: "0.75rem" }}
                >
                  <i data-lucide="book-user"></i>
                </span>
                <span className="menu-text" data-lang="directory">
                  {" "}
                  Contact Directory{" "}
                </span>
              </a>
            </li>
            <li
              className="side-nav-title"
              style={{
                marginTop: "1.5rem",
                color: "#6c757d",
                textTransform: "uppercase",
                letterSpacing: "0.05rem",
                fontSize: "0.625rem",
                padding: "0.5rem 1rem",
              }}
            >
              {" "}
              Manage{" "}
            </li>
            <li className="side-nav-item" style={{ marginBottom: "0.5rem" }}>
              <a
                onClick={() => handleCollapseToggle("sidebarPages")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.25rem",
                  color: "#6c757d",
                  textDecoration: "none",
                }}
              >
                <span
                  className="menu-icon"
                  style={{ marginRight: "0.75rem" }}
                >
                  <i data-lucide="notebook-text"></i>
                </span>
                <span className="menu-text" data-lang="pages">
                  {" "}
                  Properties{" "}
                </span>
                <span
                  className="menu-arrow"
                  style={{
                    marginLeft: "auto",
                    transition: "transform 0.2s",
                    transform:
                      activeCollapse === "sidebarPages"
                        ? "rotate(180deg)"
                        : "none",
                  }}
                >
                  {" "}
                  &darr;{" "}
                </span>
              </a>
              <div
                style={{
                  display:
                    activeCollapse === "sidebarPages" ? "block" : "none",
                }}
              >
                <ul
                  className="sub-menu"
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    marginLeft: "1.5rem",
                  }}
                >
                  <li
                    className="side-nav-item"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <a
                      href="/add-property"
                      className="side-nav-link"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#6c757d",
                        textDecoration: "none",
                      }}
                    >
                      <span className="menu-text" data-lang="pages-pricing">
                        {" "}
                        Add New Property{" "}
                      </span>
                    </a>
                  </li>
                  <li
                    className="side-nav-item"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <a
                      href="/active-properties"
                      className="side-nav-link"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#6c757d",
                        textDecoration: "none",
                      }}
                    >
                      <span className="menu-text" data-lang="pages-empty">
                        {" "}
                        Active Properties{" "}
                      </span>
                    </a>
                  </li>
                  <li
                    className="side-nav-item"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <a
                      href="/old-properties"
                      className="side-nav-link"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#6c757d",
                        textDecoration: "none",
                      }}
                    >
                      <span className="menu-text" data-lang="pages-timeline">
                        {" "}
                        Old Properties{" "}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item" style={{ marginBottom: "0.5rem" }}>
              <a
                onClick={() => handleCollapseToggle("sidebarPagesAuth")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.25rem",
                  color: "#6c757d",
                  textDecoration: "none",
                  backgroundColor: "#e9ecef",
                }}
              >
                <span
                  className="menu-icon"
                  style={{ marginRight: "0.75rem" }}
                >
                  <i data-lucide="fingerprint"></i>
                </span>
                <span className="menu-text" data-lang="authentication">
                  {" "}
                  Contacts{" "}
                </span>
                <span
                  className="menu-arrow"
                  style={{
                    marginLeft: "auto",
                    transition: "transform 0.2s",
                    transform:
                      activeCollapse === "sidebarPagesAuth"
                        ? "rotate(180deg)"
                        : "none",
                  }}
                >
                  {" "}
                  &darr;{" "}
                </span>
              </a>
              <div
                style={{
                  display:
                    activeCollapse === "sidebarPagesAuth" ? "block" : "none",
                }}
              >
                <ul
                  className="sub-menu"
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    marginLeft: "1.5rem",
                  }}
                >
                  <li
                    className="side-nav-item"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <a
                      href="/add-contacts"
                      className="side-nav-link"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#6c757d",
                        textDecoration: "none",
                      }}
                    >
                      <span className="menu-text" data-lang="auth-sign-in">
                        {" "}
                        Add New Contacts{" "}
                      </span>
                    </a>
                  </li>
                  <li
                    className="side-nav-item"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <a
                      href="/manage-phone-numbers"
                      className="side-nav-link"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#6c757d",
                        textDecoration: "none",
                      }}
                    >
                      <span className="menu-text" data-lang="auth-sign-up">
                        {" "}
                        Manage Contacts{" "}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item" style={{ marginBottom: "0.5rem" }}>
              <a
                onClick={() => handleCollapseToggle("sidebarBaseUI")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.25rem",
                  color: "#6c757d",
                  textDecoration: "none",
                }}
              >
                <span
                  className="menu-icon"
                  style={{ marginRight: "0.75rem" }}
                >
                  <i data-lucide="pencil-ruler"></i>
                </span>
                <span className="menu-text" data-lang="ui-components">
                  {" "}
                  Calling Numbers{" "}
                </span>
                <span
                  className="menu-arrow"
                  style={{
                    marginLeft: "auto",
                    transition: "transform 0.2s",
                    transform:
                      activeCollapse === "sidebarBaseUI"
                        ? "rotate(180deg)"
                        : "none",
                  }}
                >
                  {" "}
                  &darr;{" "}
                </span>
              </a>
              <div
                style={{
                  display:
                    activeCollapse === "sidebarBaseUI" ? "block" : "none",
                }}
              >
                <ul
                  className="sub-menu"
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    marginLeft: "1.5rem",
                  }}
                >
                  <li
                    className="side-nav-item"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <a
                      href="/request-phone-number"
                      className="side-nav-link"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#6c757d",
                        textDecoration: "none",
                      }}
                    >
                      <span className="menu-text" data-lang="ui-core">
                        {" "}
                        Request New Number{" "}
                      </span>
                    </a>
                  </li>
                  <li
                    className="side-nav-item"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <a
                      href="ui-interactive.html"
                      className="side-nav-link"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#6c757d",
                        textDecoration: "none",
                      }}
                    >
                      <span className="menu-text" data-lang="ui-interactive">
                        {" "}
                        Manage Active Numbers{" "}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item" style={{ marginBottom: "0.5rem" }}>
              <a
                href="charts.html"
                className="side-nav-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.25rem",
                  color: "#6c757d",
                  textDecoration: "none",
                }}
              >
                <span
                  className="menu-icon"
                  style={{ marginRight: "0.75rem" }}
                >
                  <i data-lucide="line-chart"></i>
                </span>
                <span className="menu-text"> Call History </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Sidenav Menu End */}
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="page-title">Add Contacts</h4>
                  <div className="page-title-right d-none d-sm-flex">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Floora IVR</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Contacts</a>
                      </li>
                      <li className="breadcrumb-item active">Add Contacts</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h5 className="mt-0">
                        <i className="ri-contacts-book-fill me-1"></i> Add
                        Contacts
                      </h5>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="lead-name">
                          {" "}
                          Name{" "}
                        </label>
                        <input
                          type="text"
                          id="lead-name"
                          className="form-control"
                          placeholder="Lead Name..."
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="phone-number">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="phone-number"
                          className="form-control"
                          placeholder="Phone Number..."
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email..."
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="note">
                          Note
                        </label>
                        <textarea
                          id="note"
                          className="form-control"
                          rows="4"
                          placeholder="Note..."
                        ></textarea>
                      </div>
                      <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-primary">
                          {" "}
                          Add Contact{" "}
                        </button>
                        <button type="button" className="btn btn-danger">
                          {" "}
                          Cancel{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h5 className="mt-0">
                        <i className="ri-upload-cloud-fill me-1"></i> Bulk
                        Upload
                      </h5>
                      <span className="text-muted">
                        <i className="ri-file-excel-2-line"></i>{" "}
                        <a href="#" className="link-muted">
                          Download Sample File
                        </a>
                      </span>
                    </div>
                    <form action="#" className="dropzone">
                      <div className="fallback">
                        <input name="file" type="file" />
                      </div>
                      <div className="dz-message needsclick">
                        <i className="h1 text-muted ri-upload-cloud-2-line"></i>
                        <h3>Drop files here or click to upload.</h3>
                        <span className="text-muted font-13">
                          (This is a demo. All files are **not** saved on the
                          server.)
                        </span>
                      </div>
                    </form>
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
                © {new Date().getFullYear()}{" "}
                <span className="fw-semibold">Floora AI</span>
              </div>
              <div className="col-md-6">
                <div className="text-md-end d-none d-md-block">
                  Minutes Left : <span className="fw-bold">560</span>. Recharge
                  Now
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AddContacts;