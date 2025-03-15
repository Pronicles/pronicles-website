// pages/Industries.js
import { Margin, Padding } from '@mui/icons-material';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import Navbar from '../components/Navbar';

const Industries = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#cfcdc3',
    boxSizing: 'border-box',

  };

  const serviceContainerHeadStyle = {
    margin: '3%',
    width: '100%', // Ensure it takes the full width of the container
    textAlign: 'left', // Align text to the left
    paddingLeft: '20%', 
    fontWeight: 'bold',
    fontFamily: "'Georgia', sans-serif", // Apply font family
  };

  const overlayBoxesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Distributes space between the groups
    // width: '100%',
    maxWidth: '80%',
    overflow: 'hidden',
    position: 'relative',
    marginBottom:"30px"
  };

  const boxGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 15px', // Adds space between the groups
  };

  const overlayBoxStyle = {
    position: 'relative',
    opacity: 1,
    zIndex: 0,
    margin: '15px 0',
    boxSizing: 'border-box',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '1.2em',
    fontWeight: 500,
    fontFamily: "'Poppins', sans-serif",
    color: 'rgb(255, 255, 255)',
  };

  const boxOneStyle = {
    ...overlayBoxStyle,
    backgroundColor: '#CB1147',
    height: '350px',
    width: '500px',
    backgroundImage: "url('/spark.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.99,
  };

  const boxTwoStyle = {
    ...overlayBoxStyle,
    backgroundColor: '#00848B',
    height: '300px',
    width: '450px',
    left:"10%",
    backgroundImage: "url('/dataflow.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'calc(50% + 225%)',
    backgroundPosition: 'center',
    opacity: 0.99,
  };

  const boxThreeStyle = {
    ...overlayBoxStyle,
    backgroundColor: '#B8B195',
    height: '500px',
    width: '400px',
    backgroundImage: "url('/sql.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundPositionX: '50%',
    backgroundSize: '45%',
    opacity: 0.99,
  };

  const boxFourStyle = {
    ...overlayBoxStyle,
    backgroundColor: '#04456D',
    height: '380px',
    width: '305px',
    fontSize: '4.2em',
    fontFamily: "'Courier New', Courier, monospace, sans-serif",
  };

  const boxFiveStyle = {
    ...overlayBoxStyle,
    backgroundColor: '#B8B195',
    height: '500px',
    width: '500px',
    backgroundImage: "url('/python.svg')",
    // backgroundSize: 'cover',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '20px',
    backgroundPositionY: '50%',
  };

  return (
    
    <section style={pageStyle}>
      <div style={serviceContainerHeadStyle}>
        <h2 style={{ fontSize:"4rem", fontWeight:"700"}}>Industries</h2>
      </div>
      <div style={overlayBoxesContainerStyle}>
        <div style={boxGroupStyle}>
          <div style={boxOneStyle}>
            {/* <p>Spark</p> */}
          </div>
          <div style={boxTwoStyle}>
            {/* <p>Data Flow</p> */}
          </div>
        </div>
        <div style={boxGroupStyle}>
          <div style={boxThreeStyle}>
            {/* <p>SQL</p> */}
          </div>
          <div style={boxFourStyle}>
            <p>ETL</p>
          </div>
          <div style={boxFiveStyle}>
            {/* <p>Python</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
