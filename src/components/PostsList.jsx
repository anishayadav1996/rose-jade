import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost } from './postsSlice';

const PostsList = ({ onEdit }) => {
  const { posts, status, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };
  const handleEdit = (post) => {
    setCurrentPost(post); // Set the current post for editing
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="xl:container lg:px-16  mx-auto py-20 px-6">
    <table> 
      <tr>
        <th>
          Title
        </th>
        <th>
          Description
        </th>
        <th>
         Action
        </th>
      </tr>

      {posts.map((post) => (
        <tr key={post.id} className=''>
          <td className='col-span-2 mx-20'><h3 className='text-h4 text-justify '>{post.title}</h3></td>
          <td ><p className='text-h5 text-justify mx-20'>{post.body}</p></td>
          <td className='flex '><button onClick={() => onEdit(post.id)}className='mx-5 bg-primary rounded-lg w-16 text-white' >Edit</button>
          <button onClick={() => handleDelete(post.id)} className='bg-primary rounded-lg w-16 text-white'>Delete</button></td>
          
        </tr>
      ))}
    </table>
    </div>
  );
};

export default PostsList;
