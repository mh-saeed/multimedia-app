const Delete = ({
  styles,
  selectedFile,
  myFiles,
  setMyFiles,
  setSelectedFile,
}) => {
  return (
    <button
      style={styles.controlButton}
      onClick={() => {
        if (selectedFile) {
          const newFiles = myFiles.filter(
            (file) => file.id !== selectedFile.id
          );
          setMyFiles(newFiles);
          setSelectedFile(null);
          localStorage.setItem("myFiles", JSON.stringify(newFiles));
        }
      }}
    >
      Delete
    </button>
  );
};

export default Delete;
