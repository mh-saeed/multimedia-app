import React, { useState } from "react";
import { styles } from "./styled";

const ShareButton = ({ selectedFile }) => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [error, setError] = useState("");

  const handleShareButtonClick = () => {
    if (selectedFile) {
      setShowModal(true);
      setError("");
    } else {
      // Show tooltip or error message indicating that no item is selected
      setError("Please select an item to share.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShareOptionClick = (platform) => {
    if (selectedFile) {
      setSelectedPlatform(platform);
      shareFile(platform);
      setShowModal(false);
    }
  };

  const shareFile = (platform) => {
    // Share the file on the selected platform
    const shareUrl = `https://mh-saeed-multimedia-app.netlify.app/files/${selectedFile.id}`;
    const shareText = `Check out this file: ${selectedFile.name}`;
    const encodedShareUrl = encodeURIComponent(shareUrl);
    const encodedShareText = encodeURIComponent(shareText);

    let shareLink = "";

    switch (platform) {
      case "Facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`;
        break;
      case "Twitter":
        shareLink = `https://twitter.com/share?url=${encodedShareUrl}&text=${encodedShareText}`;
        break;
      case "LinkedIn":
        shareLink = `https://www.linkedin.com/shareArticle?url=${encodedShareUrl}&title=${encodedShareText}`;
        break;
      default:
        setError("Invalid platform");
        return;
    }

    const newWindow = window.open(shareLink, "_blank");

    if (
      !newWindow ||
      newWindow.closed ||
      typeof newWindow.closed === "undefined"
    ) {
      setError(
        "Pop-up blocked by the browser. Please enable pop-ups and try again."
      );
    }
  };

  const shareOptions = ["Facebook", "Twitter", "LinkedIn"];

  return (
    <div>
      <button style={styles.controlButton} onClick={handleShareButtonClick}>
        Share
      </button>
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.shareModal}>
            <h3>Select a platform to share:</h3>
            {error && <p style={styles.error}>{error}</p>}
            <ul style={styles.shareOptionsList}>
              {shareOptions.map((platform) => (
                <li
                  key={platform}
                  onClick={() => handleShareOptionClick(platform)}
                  style={styles.shareOption}
                >
                  {platform}
                </li>
              ))}
            </ul>
            <button style={styles.sharecloseButton} onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
