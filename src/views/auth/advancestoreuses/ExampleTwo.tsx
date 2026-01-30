import { useState } from "react";
import {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetPostQuery,
  useGetPostsQuery,
  useUpdatePostMutation,
} from "../../../features/advance_redux_uses/postsSlice";

type EditPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export function ExampleTwo() {
  // 1️⃣ Get all posts
  const { data: posts, isLoading, error } = useGetPostsQuery();

  // 2️⃣ Mutations
  const [createPost, { isLoading: creating }] = useCreatePostMutation();
  const [updatePost, { isLoading: updating }] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  // 3️⃣ Local state
  const [editPost, setEditPost] = useState<EditPost | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  // 4️⃣ Get single post by ID
  const { data: singlePost } = useGetPostQuery(selectedPostId!, {
    skip: selectedPostId === null,
  });

  // Handlers
  const handleEdit = (post: EditPost) => setEditPost(post);

  const handleUpdate = async () => {
    if (!editPost || !editPost.id) return;
    await updatePost(editPost);
    setEditPost(null);
  };

  const handleCreate = async () => {
    if (!editPost) return;
    await createPost(editPost);
    setEditPost(null);
  };

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts!</p>;

  return (
    <div>
      <h1>Posts List</h1>
      {/* Posts Table */}
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts?.data?.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <button onClick={() => handleEdit(post)}>Edit</button>
                <button onClick={() => deletePost(post.id)}>Delete</button>
                <button onClick={() => setSelectedPostId(post.id)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Create / Edit Form */}
      <div style={{ marginTop: "20px" }}>
        <h3>{editPost?.id ? "Edit Post" : "Create New Post"}</h3>

        <input
          type="text"
          placeholder="Title"
          value={editPost?.title ?? ""}
          onChange={(e) =>
            setEditPost({ ...editPost, title: e.target.value } as EditPost)
          }
        />
        <br />
        <textarea
          placeholder="Body"
          value={editPost?.body ?? ""}
          onChange={(e) =>
            setEditPost({ ...editPost, body: e.target.value } as EditPost)
          }
        />
        <br />
        <input
          type="number"
          placeholder="User ID"
          value={editPost?.userId ?? 1}
          onChange={(e) =>
            setEditPost({
              ...editPost,
              userId: Number(e.target.value),
            } as EditPost)
          }
        />
        <br />
        <button
          onClick={editPost?.id ? handleUpdate : handleCreate}
          disabled={updating || creating}
        >
          {editPost?.id
            ? updating
              ? "Updating..."
              : "Update"
            : creating
              ? "Creating..."
              : "Create"}
        </button>
        <button onClick={() => setEditPost(null)}>Cancel</button>
      </div>
      {/* Display single post by ID */}
      {singlePost && (
        <div style={{ marginTop: "20px" }}>
          <h3>Single Post (ID: {singlePost.id})</h3>
          <p>Title: {singlePost.title}</p>
          <p>Body: {singlePost.body}</p>
          <p>User ID: {singlePost.userId}</p>
        </div>
      )}
      {/* Input to fetch post by ID */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          placeholder="Enter post ID to fetch"
          value={selectedPostId ?? ""}
          onChange={(e) => setSelectedPostId(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
