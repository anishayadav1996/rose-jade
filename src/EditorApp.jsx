// import { useRef } from "react";
// import { Editor } from "@tinymce/tinymce-react";

// const EditorApp = () => {
//   const editorRef = useRef(null);

//   // const logContent = () => {
//   //   if (editorRef.current) {
//   //     console.log(editorRef.current.getContent());
//   //   }
//   // };

//   return (
//     <div className="bg-white">
//        <div className="xl:container mx-auto lg:px-16 px:-6 pb-96">
//         <lable for ="title">Title</lable>
//         <input type ="text" name="title" placeholder="title"/>
//       <h1 className="pt-20 text-h2">Enter Your Text</h1>
//       <Editor
//         apiKey='ao5xaktzeauy8iiktt3vq4i60yw9rycw2gxr1ecnarp6mp7p'
//         onInit={(evt, editor) => (editorRef.current = editor)}
//         // initialValue="<p>Start creating something ...</p>"
//         init={{
//           height: 500,
//           menubar: true,
//           plugins: [
            
//             'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
//             'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
//           ],
//           toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//           tinycomments_mode: 'embedded',
//           tinycomments_author: 'Author name',
//           font_formats:
//           "Poppins=Poppins, sans-serif; Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; " +
//           "Georgia=georgia,palatino,serif; Times New Roman=times new roman,times,serif; Verdana=verdana,geneva,sans-serif; Impact=impact,chicago;",
//         content_style: `
//           @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
//           body { font-family: 'Poppins', sans-serif; font-size: 14px; }
//         `,
//           mergetags_list: [
//             { value: 'First.Name', title: 'First Name' },
//             { value: 'Email', title: 'Email' },
//           ],
//           ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
//         }}
//       />
//       {/* <button onClick={logContent}>Log Content</button> */}
//     </div>
//     </div>
//   );
// };

// export default EditorApp;


import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const EditorApp = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [editorContent, setEditorContent] = useState("");

  // Function to get TinyMCE content
  const handleEditorChange = () => {
    if (editorRef.current) {
      setEditorContent(editorRef.current.getContent());
    }
  };

  return (
    <div className="bg-white">
      <div className="xl:container mx-auto lg:px-16 px-6 pb-10">
        {/* Title Field */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Tags Field */}
        <div className="mb-6">
          <label htmlFor="tags" className="block text-lg font-semibold mb-2">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="Enter tags separated by commas"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description Field */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-lg font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Write a short description here"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* TinyMCE Editor */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Enter Your Content</h1>
          <Editor
            apiKey="ao5xaktzeauy8iiktt3vq4i60yw9rycw2gxr1ecnarp6mp7p"
            onInit={(evt, editor) => (editorRef.current = editor)}
            onEditorChange={handleEditorChange}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "link", "lists", "media", "image", "wordcount", "table", "code",
              ],
              toolbar:
                "undo redo | bold italic underline | link image media | alignleft aligncenter alignright | bullist numlist | code",
              content_style: `body { font-family: 'Poppins', sans-serif; font-size: 14px; }`,
            }}
          />
        </div>

        {/* Preview Section */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-bold mb-4">Preview</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Title</h3>
            <p className="text-gray">{title || "No Title Entered"}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Tags</h3>
            <p className="text-gray">{tags || "No Tags Entered"}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Description</h3>
            <p className="text-gray-700">
              {description || "No Description Entered"}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Content</h3>
            <div
              className="border p-4 rounded"
              dangerouslySetInnerHTML={{
                __html: editorContent || "<p>No Content Entered</p>",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorApp;

