import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-transparent"
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 0',
        backgroundColor: 'transparent',
        fontFamily: "'Poppins', sans-serif",
        width: '100%',
        marginTop: '20px',
      }}
    >
      <div
        className="container-fluid"
        style={{
          zIndex: '1',
        }}
      >
        <Link href="/" className="navbar-brand mobile-only" style={{}}>
          <Image
            src="/pixelcut-export.png"
            alt="Company Logo"
            width={160}
            height={120}
            className="d-inline-block align-top"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
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
          <ul
            className="navList navbar-nav mx-auto"
            style={{
              listStyleType: 'none',
              display: 'flex',
              alignItems: 'center',
              margin: '0',
              padding: '0',
              width: '100%',
              maxWidth: '1200px',
            }}
          >
            <li
              className="navItem nav-item"
              style={{
                margin: '0 20px',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
            >
              <Link href="/" className="navLink nav-link" style={{
                color: '#8A785E',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '17px',
                fontFamily: "'Roboto', sans-serif",
                position: 'relative',
                overflow: 'hidden',
                display: 'inline-block',
                padding: '5px 0',
                transition: 'color 0.25s',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Home
              </Link>
            </li>
            <li
              className="navItem nav-item"
              style={{
                margin: '0 20px',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
            >
              <Link href="#services" className="navLink nav-link" style={{
                color: '#8A785E',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '17px',
                fontFamily: "'Roboto', sans-serif",
                position: 'relative',
                overflow: 'hidden',
                display: 'inline-block',
                padding: '5px 0',
                transition: 'color 0.25s',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Services
              </Link>
            </li>
            <li
              className="navItem nav-item"
              style={{
                margin: '0 20px',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
            >
              <Link href="/services" className="navLink nav-link" style={{
                color: '#8A785E',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '17px',
                fontFamily: "'Roboto', sans-serif",
                position: 'relative',
                overflow: 'hidden',
                display: 'inline-block',
                padding: '5px 0',
                transition: 'color 0.25s',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Our Team
              </Link>
            </li>
            <li
              className="navItem nav-item"
              style={{
                margin: '0 20px',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
            >
              <Link href="/what-we-offer" className="navLink nav-link" style={{
                color: '#8A785E',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '17px',
                fontFamily: "'Roboto', sans-serif",
                position: 'relative',
                overflow: 'hidden',
                display: 'inline-block',
                padding: '5px 0',
                transition: 'color 0.25s',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Mission & Vision
              </Link>
            </li>
            <li
              className="navItem nav-item d-none d-lg-block"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: '0 1 auto',
                margin: '0 50px 0 50px',
              }}
            >
              <Link href="/" className="navbar-brand">
                <Image
                  src="/pixelcut-export.png"
                  alt="Company Logo"
                  width={180}
                  height={140}
                  className="d-inline-block align-top"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </Link>
            </li>
            <li
              className="navItem nav-item"
              style={{
                margin: '0 20px',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
            >
              <Link href="/blog" className="navLink nav-link" style={{
                color: '#8A785E',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '17px',
                fontFamily: "'Roboto', sans-serif",
                position: 'relative',
                overflow: 'hidden',
                display: 'inline-block',
                padding: '5px 0',
                transition: 'color 0.25s',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Blog
              </Link>
            </li>
            <li
              className="navItem nav-item"
              style={{
                margin: '0 20px',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
            >
              <Link href="/what-we-offer" className="navLink nav-link" style={{
                color: '#8A785E',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '17px',
                fontFamily: "'Roboto', sans-serif",
                position: 'relative',
                overflow: 'hidden',
                display: 'inline-block',
                padding: '5px 0',
                transition: 'color 0.25s',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                What We Offer
              </Link>
            </li>
            <li
              className="navItem nav-item"
              style={{
                margin: '0 20px',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
            >
              <Link href="/why-us" className="navLink nav-link" style={{
                color: '#8A785E',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '17px',
                fontFamily: "'Roboto', sans-serif",
                position: 'relative',
                overflow: 'hidden',
                display: 'inline-block',
                padding: '5px 0',
                transition: 'color 0.25s',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Why Us?
              </Link>
            </li>
            <li
              className="navRight navItem nav-item"
              style={{
                margin: '0 20px',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
            >
              <Link href="/contact" className="navLink nav-link" style={{
                color: '#8A785E',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '17px',
                fontFamily: "'Roboto', sans-serif",
                position: 'relative',
                overflow: 'hidden',
                display: 'inline-block',
                padding: '5px 0',
                transition: 'color 0.25s',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
