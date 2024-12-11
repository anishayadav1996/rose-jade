import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from './postsSlice';

const PostForm = ({ currentPost, clearCurrentPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPost) {
      setTitle(currentPost.title);
      setBody(currentPost.body);
    } else {
      setTitle('');
      setBody('');
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPost) {
      dispatch(updatePost({ ...currentPost, title, body }));
    } else {
      dispatch(addPost({ title, body }));
    }
    clearCurrentPost();
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">{currentPost ? 'Update' : 'Add'}</button>
      {currentPost && <button onClick={clearCurrentPost}>Cancel</button>}
    </form>
  );
};

export default PostForm;
