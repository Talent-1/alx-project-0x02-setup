import React, { useState } from "react";
import Button from "../common/Button"; // adjust path if needed

interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <h2>Create Post</h2>

          <input
            name="title"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            name="content"
            placeholder="Enter text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          {/* BUTTONS SECTION */}
          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>

            {/* Submit Button */}
            <Button 
              type="submit" 
              size="md" 
              shape="rounded"
            >
              Add Post
            </Button>

            {/* Cancel Button */}
            <Button 
              type="button" 
              size="md" 
              shape="rounded" 
              onClick={onClose}
            >
              Cancel
            </Button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
