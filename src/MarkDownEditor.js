import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./MarkDownEditor.css"; // Import the CSS file

const MarkDownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!");

  return (
    <div className="markdown-editor-container">
      <h2 className="markdown-title">Markdown Editor</h2>

      {/* Markdown Input */}
      <textarea
        className="markdown-input"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type Markdown here..."
      />

      {/* Markdown Preview */}
      <div className="markdown-preview">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkDownEditor;


// to run use 
//     # Welcome to My Markdown Editor!
// ## This is a subheading
// ### This is a smaller heading

// This is a **bold** word, and this is an *italic* word.  
// You can also do ***bold and italic*** together.

// > This is a blockquote. It helps to highlight important text.

// ---
// ## Unordered List
// - Item 1
// - Item 2
//   - Subitem 2.1
//   - Subitem 2.2
// - Item 3

// ## Ordered List
// 1. First item
// 2. Second item
//    1. Subitem 2.1
//    2. Subitem 2.2
// 3. Third item
// ## Links
// Click here to visit [Google](https://google.com).

// ## Image
// ![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)
// ## Example Table

// | Name   | Age | City      |
// |--------|----|----------|
// | Alice  | 25 | New York |
// | Bob    | 30 | London   |
// | Charlie| 28 | Paris    |
// ## Inline Code
// Use `console.log("Hello World");` in JavaScript."

// 