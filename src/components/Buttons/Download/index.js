const Download = ({ styles, selectedFile }) => {
  return (
    <button
      style={styles.controlButton}
      onClick={() => {
        if (selectedFile) window.open(selectedFile.path, "_blank");
      }}
    >
      Download
    </button>
  );
};
export default Download;
