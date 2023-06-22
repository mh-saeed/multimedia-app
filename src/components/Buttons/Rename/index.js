const Rename = ({ styles, selectedFile, myFiles, setMyFiles }) => {
  return (
    <button
      style={styles.controlButton}
      onClick={() => {
        if (selectedFile) {
          const newFiles = myFiles.map((file) => {
            if (file.id === selectedFile.id) {
              return {
                ...file,
                name: prompt("Enter new name"),
              };
            }
            return file;
          });
          setMyFiles(newFiles);
        }
      }}
    >
      Rename
    </button>
  );
};
export default Rename;
