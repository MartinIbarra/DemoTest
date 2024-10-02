import "./styles/index.css";
import NavBar from "./components/NavBar";
import "./styles/Home.css";
import backgroundImage from "./assets/img/office_view.jpg";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container-fluid p-0 min-vh-100">
        <div className="row g-0 min-vh-100">
          {/* Left Section */}
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start p-5 bg-dark text-light">
            <h2 className="mb-4">Welcome to Businezz X</h2>
            <h1 className="display-4 fw-bold">
              Join us in growing your business.
            </h1>
            <p className="lead">
              Elevate your business with Businezz X, a professional Webflow
              template.
            </p>
            <button className="btn btn-outline-light mt-3">Contact us</button>
          </div>

          {/* Right Section */}
          <div
            style={{ backgroundImage: `url(${backgroundImage}` }}
            className="col-lg-6 d-flex justify-content-center align-items-center office-background"
          >
            <div className="p-5 shadow-lg rounded bg-light">
              <h2 className="mb-4">Get a free consultation</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="contact@email.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Please type your message here..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Get in Touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
