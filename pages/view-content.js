import { useEffect, useState } from 'react';
import Link from 'next/link';

const ViewContent = () => {
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/get-content');
        if (response.ok) {
          const data = await response.json();
          setContentList(data.content);
        } else {
          console.error('Error fetching content:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <h1>Saved Content</h1>
      <Link href="/editor" legacyBehavior>
        <a>Back to Editor</a>
      </Link>
      <ul>
        {contentList.map((content, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: content.content }}></li>
        ))}
      </ul>
    </div>
  );
};

export default ViewContent;
