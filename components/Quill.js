import React, { useEffect, useRef } from 'react';
import Quill from 'quill';

const QuillEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const editor = new Quill(editorRef.current, {
        theme: 'snow', // or 'bubble'
      });
    }
  }, []);

  return <div ref={editorRef} />;
};

export default QuillEditor;
