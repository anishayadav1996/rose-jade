import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const EditorApp = () => {
  const editorRef = useRef(null);

  const logContent = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="bg-white">
       <div className="xl:container mx-auto lg:px-16 px:-6 pb-96">
      <h1 className="pt-20 text-h2">Enter Your Text</h1>
      <Editor
        apiKey='ao5xaktzeauy8iiktt3vq4i60yw9rycw2gxr1ecnarp6mp7p'
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Start creating something ...</p>"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            // Core editing features
            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
            // Your account includes a free trial of TinyMCE premium features
            // Try the most popular premium features until Dec 30, 2024:
            'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
          ],
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          font_formats:
          "Poppins=Poppins, sans-serif; Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; " +
          "Georgia=georgia,palatino,serif; Times New Roman=times new roman,times,serif; Verdana=verdana,geneva,sans-serif; Impact=impact,chicago;",
        content_style: `
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Poppins', sans-serif; font-size: 14px; }
        `,
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
          ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
        }}
      />
      {/* <button onClick={logContent}>Log Content</button> */}
    </div>
    </div>
  );
};

export default EditorApp;
