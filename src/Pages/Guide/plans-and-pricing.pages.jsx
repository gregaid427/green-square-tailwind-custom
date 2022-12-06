import Footer from "../../Components/Footer/footer.component";
import Crown from "../../Assets/images/crown-image.jpeg";
export default function PlansAndPricingIndividual(props) {
  props.setShowNavBar(true);
  return (
    <>
      <div className="bg-light rounded-3 p-3">
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              <h1 className="display-4">
                Plans & Pricing,
                <br />
                <span className="text-success">Individuals</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-md-4">
              <h1 className="display-5">
                Headline for
                <br />
                both plans
              </h1>

              <p>
                Description of these plans – who are they best suited for? Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
                molestie massa. Ut mollis neque tellus, in tristique libero
                auctor sit amet. Ut at tincidunt tellus, sodales ullamcorper
                turpis. Donec fermentum ligula et vestibulum vulputate.
              </p>
            </div>

            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="card rounded-3 mb-4 text-center shadow-sm">
                    <div className="py-3">
                      <h4 className="fw-normal text-success my-0">
                        Monthly Plan
                      </h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Feature #1</li>
                        <li className="list-group-item">Feature #2</li>
                        <li className="list-group-item">Feature #3</li>
                      </ul>
                    </div>
                    <div className="card-footer bg-light">
                      <p className="d-flex justify-content-between m-0">
                        <s>
                          <span className="text-muted">GHS</span> <b>25.00</b>
                        </s>

                        <span>SAVE 20%</span>
                      </p>

                      <h3 className="display-6">
                        <span
                          style={{ fontSize: "14px" }}
                          className="text-muted"
                        >
                          GHS
                        </span>{" "}
                        20.00
                      </h3>
                    </div>
                    <div className="card-footer p-0">
                      <button
                        type="button"
                        className="w-100 btn btn-lg btn-success"
                        style={{ borderRadius: "0px" }}
                      >
                        Get started
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="card rounded-3 mb-4 text-center shadow-sm">
                    <div className="py-3">
                      <h4 className="fw-normal text-success my-0">
                        Annual Plan
                      </h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Feature #1</li>
                        <li className="list-group-item">Feature #2</li>
                        <li className="list-group-item">Feature #3</li>
                      </ul>
                    </div>
                    <div className="card-footer bg-light">
                      <p className="d-flex justify-content-between m-0">
                        <s>
                          <span className="text-muted">GHS</span> <b>25.00</b>
                        </s>

                        <span>SAVE 20%</span>
                      </p>

                      <h3 className="display-6">
                        <span
                          style={{ fontSize: "14px" }}
                          className="text-muted"
                        >
                          GHS
                        </span>{" "}
                        20.00
                      </h3>
                    </div>
                    <div className="card-footer p-0">
                      <button
                        type="button"
                        className="w-100 btn btn-lg btn-success"
                        style={{ borderRadius: "0px" }}
                      >
                        Get started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light rounded-3 p-3">
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1 className="display-5">
                Headline for pro application, without a monthly or annual plan
              </h1>
              <p>
                Description of these plans – who are they best suited for? Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
                molestie massa. Ut mollis neque tellus, in tristique libero
                auctor sit amet. Ut at tincidunt tellus, sodales ullamcorper
                turpis. Donec fermentum ligula et vestibulum vulputate.
              </p>
            </div>

            <div className="col-12 col-md-4">
              <div className="card rounded-3 mb-4 text-center shadow-sm">
                <div className="card mb-3 bg-none">
                  <div className="row g-0" style={{ height: "90px" }}>
                    <div className="col-md-4">
                      <img
                        src={Crown}
                        style={{ width: "100%", height: "90px" }}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>

                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-success"
                  >
                    Top Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
