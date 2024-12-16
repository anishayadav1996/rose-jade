import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Blog() {
  const [editorContent, setEditorContent] = useState("");

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

  // Auto-save content to localStorage every 5 seconds
  useEffect(() => {
    const autosave = setInterval(() => {
      localStorage.setItem("editorContent", editorContent);
    }, 5000);

    return () => clearInterval(autosave);
  }, [editorContent]);

  return (
    <div className="my-40 px-16">
      <h1>CKEditor with Vite.js</h1>

      <CKEditor
        editor={ClassicEditor}
        data={editorContent || "<p>Start typing...</p>"}
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
            "|",
            "undo",
            "redo",
          ],
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorContent(data);
        }}
      />

      <h2>Editor Output:</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "10px",
        }}
        dangerouslySetInnerHTML={{ __html: editorContent }}
      />
    </div>
  );
}
