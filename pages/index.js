import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import Blog from './blog';
import Industries from './admin';



export default function Home() {
  useEffect(() => {
    // Dynamically import Bootstrap JS to ensure client-side execution
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div>
      <section id='page-1'>
        <div className="page">

          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
              <Link href="/" className="navbar-brand mobile-only">
                <Image
                  src="/pixelcut-export.png"
                  alt="Company Logo"
                  width={160}
                  height={120}
                  className="d-inline-block align-top"
                />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navList navbar-nav mx-auto">
                  <li className="navItem nav-item">
                    <Link href="/" className="navLink nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="navItem nav-item">
                    <Link href="#services" className="navLink nav-link">
                      Services
                    </Link>
                  </li>
                  <li className="navItem nav-item">
                    <Link href="/services" className="navLink nav-link">
                      Our Team
                    </Link>
                  </li>
                  <li className="navItem nav-item">
                    <Link href="/what-we-offer" className="navLink nav-link">
                      Mission & Vision
                    </Link>
                  </li>
                  <li className="navItem nav-item d-none d-lg-block">
                    <Link href="/" className="navbar-brand">
                      <Image
                        src="/pixelcut-export.png"
                        alt="Company Logo"
                        width={180}
                        height={140}
                        className="d-inline-block align-top"
                      />
                    </Link>
                  </li>
                  <li className="navItem nav-item">
                    <Link href="/blog" className="navLink nav-link">
                      Blog
                    </Link>
                  </li>
                  <li className="navItem nav-item">
                    <Link href="/what-we-offer" className="navLink nav-link">
                      What We Offer
                    </Link>
                  </li>
                  <li className="navItem nav-item">
                    <Link href="/why-us" className="navLink nav-link">
                      Why Us?
                    </Link>
                  </li>
                  <li className="navRight navItem nav-item">
                    <Link href="/contact" className="navLink nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <main className="main">
            <h1 className="coolText">
              Let <span className="highlight">data</span> lead the way.
            </h1>

            {/* Right side items */}
            <div className="right-side-items">
              <h2>Data Engineering</h2>
              <h2>Data Science</h2>
              <h2>Data Analysis</h2>
            </div>

            <div className="buttonContainer">
              <button id='rq-btn'>
                Request a Consultation
              </button>
            </div>
          </main>
          <div className="box one"></div>
          <div className="box two"></div>
          <div className="box three"></div>
          <div className="box four"></div>
          <div className="box five"></div>
          <div className="box six"></div>
          <div className="box seven"></div>
          <div className="box eight"></div>
          <div className="box nine"></div>
        </div>
        {/* Additional Boxes or Content */}
        {/* <div className="box one"></div>
      <div className="box two"></div>
      <div className="box three"></div>
      <div className="box four"></div>
      <div className="box five"></div>
      <div className="box six"></div>
      <div className="box seven"></div>
      <div className="box eight"></div>
      <div className="box nine"></div> */}
      </section>
      {/* New Services Section */}


      <div id="page-2" className="page-container">
        <div className="service-container">
          <div className='service-container-head'>
            <h2>Our Services</h2>
            <p>Explore the wide range of services we offer to help you harness the power of data.</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-item">
                <h3>Data Engineering</h3>
                <p>Description about Data Engineering services, including details about how we manage and construct data pipelines.</p>
                <p>Service Range: 1 to 10</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-item">
                <h3>Data Science</h3>
                <p>Description about Data Science services, focusing on data modeling, machine learning, and predictive analytics.</p>
                <p>Service Range: 10 to 20</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-item">
                <h3>Data Analysis</h3>
                <p>Description about Data Analysis services, with insights on how we interpret data and generate actionable insights.</p>
                <p>Service Range: 20 to 30</p>
              </div>
            </div>
          </div>


        </div>
        <div className="overlay-boxes-container">
          <div className="overlay-box box-one"></div>
          <div className="overlay-box box-two"></div>
          <div className="overlay-box box-three"></div>
          <div className="overlay-box box-four"></div>
          <div className="overlay-box box-five"></div>
          <div className="overlay-box box-six"></div>

        </div>
      </div>
      <Industries/>
     
<div id="page-2" className="page-container">
        <div className="service-container">
          <div className='service-container-head'>
            <h2>Pronicles</h2>
            <p>Explore the wide range of services we offer to help you harness the power of data.</p>
          </div>
          <div className="row">
            

            <div className="col-md-4">
              <div className="service-item">
                <h3>Who we are?</h3>
                <p>Description about Data Analysis services, with insights on how we interpret data and generate actionable insights.</p>
              </div>
            </div>
          </div>


        </div>
        <div className="overlay-boxes-container">
          <div className="overlay-box box-one"></div>
          <div className="overlay-box box-two"></div>
          <div className="overlay-box box-three"></div>
          <div className="overlay-box box-four"></div>
          <div className="overlay-box box-five"></div>
          <div className="overlay-box box-six"></div>

        </div>
        
      </div>
      <Blog />
      <Footer />

    </div>
    
  );
}
