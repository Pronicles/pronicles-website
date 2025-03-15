import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const colors = ['#449F9F', '#A53F57', '#486B87', '#b03a2e'];

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 5;

  useEffect(() => {
    // Fetch the blog posts from the API when the component mounts
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blogPosts');
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  // Sort posts by date in descending order
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Calculate the current posts to display
  const currentPosts = sortedPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage);

  const handleNextPage = () => {
    if ((currentPage + 1) * postsPerPage < sortedPosts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='blog'>
      <div className="timeline-container">
        <h1>Blog Timeline</h1>
        <div className="timeline">
          {currentPosts.map((post, index) => (
            <div key={post._id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              {index % 2 === 0 ? (
                <>
                  <Link href={`/blog/${post._id}`} legacyBehavior>
                    <a className="notification" style={{ backgroundColor: colors[index % colors.length] }}>
                      <div className="notiglow"></div>
                      <div className="notiborderglow"></div>
                      <div className="notititle">{post.title}</div>
                      <div className="notibody">{post.content}</div>
                    </a>
                  </Link>
                  <div className="timeline-date">{post.date}</div>
                </>
              ) : (
                <>
                  <div className="timeline-date">{post.date}</div>
                  <Link href={`/blog/${post._id}`} legacyBehavior>
                    <a className="notification" style={{ backgroundColor: colors[index % colors.length] }}>
                      <div className="notiglow"></div>
                      <div className="notiborderglow"></div>
                      <div className="notititle">{post.title}</div>
                      <div className="notibody">{post.content}</div>
                    </a>
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 0}>
            <svg width="15" height="15" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </button>
          <button onClick={handleNextPage} disabled={(currentPage + 1) * postsPerPage >= sortedPosts.length}>
            <svg width="15" height="15" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </button>
        </div>
      </div>
      <style jsx>{`
        .blog {
          background-color: #D2D1CA;
          min-height: 100vh;
        }
        .timeline-container {
          width: 80%;
          margin: 0 auto;
          padding: 20px;
        }
        .timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background-color: black;
          transform: translateX(-50%);
        }
        .timeline-item {
          display: flex;
          align-items: center;
          margin: 20px 0;
          width: 50%;
          justify-content: space-between;
          position: relative;
        }
        .timeline-item.left .notification {
          order: 1;
          margin-right: 20px;
        }
        .timeline-item.left .timeline-date {
          order: 2;
        }
        .timeline-item.right .timeline-date {
          order: 1;
          margin-right: 20px;
        }
        .timeline-item.right .notification {
          order: 2;
        }
        .notification {
          display: flex;
          flex-direction: column;
          isolation: isolate;
          position: relative;
          width: 18rem;
          height: 8rem;
          border-radius: 1rem;
          overflow: hidden;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-size: 16px;
          --gradient: linear-gradient(to bottom,rgb(254, 254, 254),rgb(205, 224, 255),rgb(252, 252, 252));
          --color:rgb(252, 252, 252);
          text-decoration: none;
        }
        .notification:before {
          position: absolute;
          content: "";
          inset: 0.0625rem;
          border-radius: 0.9375rem;
          z-index: 2;
        }
        .notification:after {
          position: absolute;
          content: "";
          width: 0.25rem;
          inset: 0.65rem auto 0.65rem 0.5rem;
          border-radius: 0.125rem;
          background: var(--gradient);
          transition: transform 300ms ease;
          z-index: 4;
        }
        .notification:hover:after {
          transform: translateX(0.15rem);
        }
        .notititle {
          color: var(--color);
          padding: 0.65rem 0.25rem 0.4rem 1.25rem;
          font-weight: 500;
          font-size: 1.1rem;
          transition: transform 300ms ease;
          z-index: 5;
        }
        .notification:hover .notititle {
          transform: translateX(0.15rem);
        }
        .notibody {
          color:rgb(255, 255, 255);
          padding: 0 1.25rem;
          transition: transform 300ms ease;
          z-index: 5;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
        .notification:hover .notibody {
          transform: translateX(0.25rem);
        }
        .notiglow,
        .notiborderglow {
          position: absolute;
          width: 20rem;
          height: 20rem;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle closest-side at center, white, transparent);
          opacity: 0;
          transition: opacity 300ms ease;
        }
        .notiglow {
          z-index: 3;
        }
        .notiborderglow {
          z-index: 1;
        }
        .notification:hover .notiglow {
          opacity: 0.1;
        }
        .notification:hover .notiborderglow {
          opacity: 0.1;
        }
        .timeline-date {
          align-self: center;
          white-space: nowrap;
          padding: 5px 10px;
          border-radius: 5px;
          text-align: center;
          flex: 0 0 45%;
        }
        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .pagination button {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s linear;
          border-radius: 10px;
          border: 1px solid #F2BED1;
          padding: 10px 20px;
          margin: 0 10px;
          background-color: #fff;
        }
        .pagination button > svg {
          margin-left: 5px;
          transition: all 0.4s ease-in;
        }
        .pagination button:hover > svg {
          font-size: 1.2em;
          transform: translateX(6px);
        }
        .pagination button:hover {
          box-shadow: 10px 10px 40px #d1d1d1;
          transform: translateY(-5px);
        }
        .pagination button:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default Blog;
