import { useEffect, useRef } from 'react';
import Link from 'next/link';

const DocumentEditor = () => {
  const editorRef = useRef(null);
  const toolbarRef = useRef(null);
  const editorContainerRef = useRef(null);
  const editorInstance = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.ckeditor.com/ckeditor5/11.2.0/decoupled-document/ckeditor.js';
    script.async = true;
    script.onload = () => {
      initEditor();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initEditor = () => {
    if (window.DecoupledEditor) {
      window.DecoupledEditor
        .create(editorContainerRef.current)
        .then(editor => {
          toolbarRef.current.appendChild(editor.ui.view.toolbar.element);
          editor.setData('My default Data');
          editor.model.document.on('change:data', () => {
            console.log('The data has changed!');
          });
          editorInstance.current = editor;
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const addData = () => {
    const currentData = editorInstance.current.getData();
    saveContentToDB(currentData);
  };

  const saveContentToDB = async (content) => {
    console.log("Saving content:", content);
    try {
      const response = await fetch('/api/save-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message, result.id);
      } else {
        console.error('Error saving content:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  return (
    <div>
      <h1>Document editor</h1>
      <Link href="/view-content" legacyBehavior>
        <a>View Saved Content</a>
      </Link>
      <div ref={toolbarRef} id="toolbar-container"></div>
      <div ref={editorContainerRef} id="editor">
        <p>This is the initial editor content.</p>
      </div>
      <button onClick={addData}>Add Data</button>
    </div>
  );
};

export default DocumentEditor;
