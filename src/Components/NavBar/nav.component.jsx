import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import GreenSquareLogo from "./../../Assets/images/green_square_logo.png";
import { UserContext } from "../../Context/auth.context";
import UserProfile from "../user-profile/user-profile.component";

const NavBar = (props) => {
  const { user, isCompany, logOut } = useContext(UserContext);
  const location = useLocation();

  let navItem = "nav-link";
  let _arr = ["/employee-guide", "/company-guide"];
  let homepage = "/";

  if (!isCompany) {
    homepage = "/employee-guide";
  } else {
    homepage = "/company-guide";
  }

  if (_arr.includes(location.pathname)) {
    navItem += " text-white";
  }

  return (
    <>
      {props.showNavBar ? (
        // && user
        <>
          <div>
            <nav
              className="navbar navbar-expand-lg navbar-light sticky-top transparent-nav"
              style={{ marginBottom: "-0px" }}
            >
              <div class="container">
                <a className="navbar-brand" href={homepage}>
                  <img
                    src={GreenSquareLogo}
                    alt="Green Square Logo"
                    style={{ height: "50px" }}
                  />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fas fa-bars"></i>
                </button>
                <div
                  className="  collapse navbar-collapse transparent-nav"
                  id="navbarNavAltMarkup"
                >
                  {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                  <div class="navbar-nav nvvy">      <ul class="navbar-nav ">
                    {
                      // user && user.user.role === "user" ?
                 
                      !isCompany ? (
                        <>
                          <Link
                            className={`${navItem}`}
                            to="/employee-guide"
                            aria-current="page"
                          >
                            How It Works
                          </Link>

                          {isCompany ? (
                            <Link className={navItem} to="/browse-jobs">
                              Browse Jobs
                            </Link>
                          ) : (
                            <Link className={navItem} to="/browse-companies">
                              Browse Companies
                            </Link>
                          )}

                          {user ? (
                            <>
                              <Link
                                className={navItem}
                                to="/employee-dashboard"
                              >
                                Dashboard
                              </Link>
                            </>
                          ) : (
                            <></>
                          )}
                          <Link className={navItem} to="/plans-and-pricing">
                            Plans and pricing
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link className={navItem} to="/company-guide">
                            How It Works
                          </Link>
                          <Link className={navItem} to="/cvs">
                            Browse CVs
                          </Link>
                          <Link className={navItem} to="/browse-schools">
                            Browse Schools
                          </Link>
                          {user && user.hasOwnProperty("company") ? (
                            <>
                              <Link className={navItem} to="/post-a-job">
                                Post Job
                              </Link>
                              <Link className={navItem} to="/company-jobs">
                                Posted Jobs
                              </Link>
                              <Link className={navItem} to="/company-dashboard">
                                Dashboard
                              </Link>
                            </>
                          ) : (
                            <></>
                          )}
                          <Link
                            className={navItem}
                            to="/plans-and-pricing-companies"
                          >
                            Plans and pricing
                          </Link>
                        </>
                      )
                    }
                    </ul>
                  </div>
                </div>
              </div>
              <UserProfile onClick={() => logOut()} />
            </nav>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavBar;
