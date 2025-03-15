import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/blogPosts/${id}`);
          if (response.ok) {
            const data = await response.json();
            setPost(data);
            setLoading(false);
          } else {
            console.error('Failed to fetch post data');
            setError('Failed to fetch post data');
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching post:', error);
          setError('Error fetching post');
          setLoading(false);
        }
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div>
        <h1>{post.title}</h1>
        {/* Use dangerouslySetInnerHTML to render HTML content from CKEditor */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p><strong>Date:</strong> {post.date}</p>
      </div>
      <Footer />
    </>
  );
};

export default Post;
