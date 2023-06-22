import React, { useState } from "react";
import { styles } from "./styled";

const AddMedia = ({ myFiles, setMyFiles }) => {
  const [showModal, setShowModal] = useState(false);
  const [mediaName, setMediaName] = useState("");
  const [mediaPath, setMediaPath] = useState("");
  const [mediaType, setMediaType] = useState("image");
  const [error, setError] = useState("");

  const handleAddMedia = () => {
    if (!mediaName || !mediaPath) {
      setError("Please enter both name and path.");
      return;
    }

    const newMediaId = generateMediaId();

    const newMedia = {
      id: newMediaId,
      name: mediaName,
      path: mediaPath,
      type: mediaType,
    };

    setMyFiles([...myFiles, newMedia]);

    setMediaName("");
    setMediaPath("");
    setMediaType("image");
    setError("");
    setShowModal(false);
  };

  const generateMediaId = () => {
    return Math.floor(Math.random() * 100000);
  };

  return (
    <>
      <button style={styles.controlButton} onClick={() => setShowModal(true)}>
        Add Media
      </button>
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.addMediaModal}>
            <form>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={mediaName}
                  onChange={(e) => setMediaName(e.target.value)}
                />
              </div>
              <div>
                <label>Path:</label>
                <input
                  type="text"
                  value={mediaPath}
                  onChange={(e) => setMediaPath(e.target.value)}
                />
              </div>
              <div>
                <label>Type:</label>
                <select
                  value={mediaType}
                  onChange={(e) => setMediaType(e.target.value)}
                >
                  <option value="image">Image</option>
                  <option value="document">Document</option>
                  <option value="audio">Audio</option>
                  <option value="video">Video</option>
                </select>
              </div>
              {error && <p style={styles.error}>{error}</p>}
              <div>
                <button
                  type="button"
                  style={styles.addMediaCloseButton}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  style={styles.addMediaButton}
                  onClick={handleAddMedia}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMedia;
