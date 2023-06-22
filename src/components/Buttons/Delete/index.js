const Delete = ({ styles, selectedFile, myFiles, setMyFiles }) => {
  return (
    <button
      style={styles.controlButton}
      onClick={() => {
        if (selectedFile) {
          const newFiles = myFiles.filter(
            (file) => file.id !== selectedFile.id
          );
          setMyFiles(newFiles);
        }
      }}
    >
      Delete
    </button>
  );
};

export default Delete;
