import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from './postsSlice';
import EditPostForm from './EditPostForm';

const EditPostForm = ({ currentPost, clearCurrentPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPost) {
      setTitle(currentPost.title);
      setBody(currentPost.body);
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPost) {
      dispatch(updatePost({ id: currentPost.id, title, body }));
      clearCurrentPost(); // Clear the form after updating
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit">Update</button>
      <button type="button" onClick={clearCurrentPost}>Cancel</button>
    </form>
  );
};

export default EditPostForm;
