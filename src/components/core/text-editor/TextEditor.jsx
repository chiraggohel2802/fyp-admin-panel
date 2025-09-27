/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'; // Import Quill styles
import { Label } from '..';

const TextEditor = ({ value, onChange, label, fieldName }) => {
  const [editorValue, setEditorValue] = useState(value);

  const handleEditorChange = (newValue) => {
    setEditorValue(newValue);
    onChange(fieldName, newValue); // Pass the raw HTML to the onChange handler
  };

  return (
    <div>
      {label && <Label text={label} />}
      <ReactQuill
        value={editorValue}
        onChange={handleEditorChange}
        theme="snow" // You can change the theme if needed
      />
    </div>
  );
};

// Set the display name for the component
TextEditor.displayName = 'TextEditor';

TextEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default TextEditor;
