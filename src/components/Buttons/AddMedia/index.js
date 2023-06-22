import React, { useEffect, useState } from "react";
import { styles } from "./styled";

const AddMedia = ({ myFiles, setMyFiles }) => {
  const [showModal, setShowModal] = useState(false);
  const [mediaName, setMediaName] = useState("");
  const [mediaPath, setMediaPath] = useState("");
  const [mediaType, setMediaType] = useState("image");
  const [error, setError] = useState("");

  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError("");
      }, 3000); // Change the delay value (in milliseconds) as per your requirement
    }
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

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
              <div style={styles.formField}>
                <label htmlFor="mediaName" style={styles.label}>
                  Name:
                </label>
                <input
                  type="text"
                  id="mediaName"
                  value={mediaName}
                  onChange={(e) => setMediaName(e.target.value)}
                  style={styles.input}
                  placeholder="Enter the media name"
                />
              </div>
              <div style={styles.formField}>
                <label htmlFor="mediaPath" style={styles.label}>
                  Path:
                </label>
                <input
                  type="text"
                  id="mediaPath"
                  value={mediaPath}
                  onChange={(e) => setMediaPath(e.target.value)}
                  style={styles.input}
                  placeholder="Enter the media path"
                />
              </div>
              <div style={styles.formField}>
                <label htmlFor="mediaType" style={styles.label}>
                  Type:
                </label>
                <select
                  id="mediaType"
                  value={mediaType}
                  onChange={(e) => setMediaType(e.target.value)}
                  style={styles.select}
                >
                  <option value="image">Image</option>
                  <option value="document">Document</option>
                  <option value="audio">Audio</option>
                  <option value="video">Video</option>
                </select>
              </div>

              {error && <p style={styles.error}>{error}</p>}

              <div style={styles.formActions}>
                <button
                  style={styles.closeButton}
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  style={styles.saveButton}
                  type="button"
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
