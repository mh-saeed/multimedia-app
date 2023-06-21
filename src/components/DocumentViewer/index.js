import { styles } from "./styled";

const DocumentViewer = ({ path }) => {
  return (
    <div style={styles.div}>
      <iframe style={styles.iframe} src={path} title={path}></iframe>
    </div>
  );
};

export default DocumentViewer;
