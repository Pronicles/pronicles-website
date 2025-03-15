// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* // In _document.js or directly in your HTML head */}
{/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz4fnFO9gyb4J1Q1qU9K/ScQsAP7hUibX39j7f7a6oaI9iF+7T1k8wG/5S" crossorigin="anonymous"></script> */}
{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9O+ceS2e6vB6aB2aG2H6c6Z7s0F4X5hF5V4b5Z4Y5H5c5B5B5B5B5B5" crossorigin="anonymous"></script> */}

      <Head>
        {/* Add Google Fonts link for Poppins */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        /><link 
         href="https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@400;500;600&display=swap"
        rel="stylesheet" 
      />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        {/* Add Material Icons link */}
        <link 
          href="https://fonts.googleapis.com/icon?family=Material+Icons" 
          rel="stylesheet" 
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
