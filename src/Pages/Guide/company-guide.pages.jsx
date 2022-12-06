import { Link } from "react-router-dom";
import { useContext } from "react";
import businessWoman from "./../../Assets/images/african-american-business-woman-by-window.png";
import IdealCandidateSection from "../../Components/Containers/Sections/ideal-candidate.component";
import Footer from "../../Components/Footer/footer.component";
import EmployeeTestimonialComponent from "../../Components/Containers/Sections/employee-testimonial.component";
import OurTrackRecord from "../../Components/Containers/Sections/our-track-record.component";
import { UserContext } from "../../Context/auth.context";
import NavBar from "../../Components/NavBar/nav.component";

function CarouselInformation() {
  return (
    <>
      <div
        className="carousel-caption float-start text-start"
        style={{ top: "20vh" }}
      >
        <h1 className="display-4 text-lign-at-center col-md-6   fw-semibold">
          Find the <br />
          most qualified 
          candidates, fast.
        </h1>
        <div className="btn-align-center">
        <Link to={"/post-a-job"} className="btn  btn-success">
          POST A JOB
        </Link>
        </div>
      </div>
    </>
  );
}

function GuidePage(props) {
  const { user } = useContext(UserContext);
  props.setShowNavBar(true);

  return (
    <>
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div
          className="carousel-inner d-flex align-items-center justify-content-start"
          style={{ marginTop: "-15vh" }}
        >
          <div className="carousel-item active">
            <img
              src={businessWoman}
              style={{ width: "100%", minHeight: "100%" }}
              alt="Sunset Over the City"
            />
            <CarouselInformation />
          </div>

          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
              style={{ width: "100%", minHeight: "100%" }}
              alt="Canyon at Nigh"
            />
            <CarouselInformation />
          </div>

          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
              style={{ width: "100%", minHeight: "100%" }}
              alt="Cliff Above a Stormy Sea"
            />
            <CarouselInformation />
          </div>
        </div>
      </div>

      {!user ? (
        <>
          {/* {!user.user.hasOwnProperty("comapny_id") ? ( */}
          <div className="bg-light text-center">
            <div className="container-fluid py-5">
              <h2 className="display-5 fw-bold">
                The smartest way to job search.
              </h2>
              <p className="">
                With Green Square, finding the right candidate has never been
                easier.
              </p>
              <div className="text-center">
                <div className="">
                  <Link
                    to={"/company-signup"}
                    className="btn btn-success btn-lg"
                    type="button"
                    style={{ width: "200px", marginRight: "5px" }}
                  >
                    REGISTER
                  </Link>

                  <Link
                    to="/login"
                    className="btn btn-warning btn-lg"
                    type="button"
                    style={{ width: "200px", marginLeft: "5px" }}
                  >
                    SIGN IN
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ) : null} */}
        </>
      ) : null}

      <div className="p-5 text-center">
        <div className="d-grid container gap-3">
          <h3 className="display-5 text-success">How it works</h3>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div
                className="rounded-4 how-it-works-img border p-4 text-center"
                style={{ height: "500px" }}
              >
                <h5>Create your Job Post</h5>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="rounded-4 how-it-works-img border p-4 text-center"
                style={{ height: "500px" }}
              >
                <h5>Reach Top Candidates</h5>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="rounded-4 how-it-works-img border p-4 text-center"
                style={{ height: "500px" }}
              >
                <h5>Review Your Great Matches</h5>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>
          </div>

          <div>
            <p>
              It's that easy! Sign up today to take your employee search to the
              next level.
            </p>
            <button className="btn btn-warning btn-lg text-dark" type="button">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      <OurTrackRecord />

      <EmployeeTestimonialComponent />

      <IdealCandidateSection />
     
      <Footer></Footer>
    </>
  );
}

export default GuidePage;
