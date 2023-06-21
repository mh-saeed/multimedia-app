import { styles } from "./styled";

const ImageViewer = ({ path }) => {
  return (
    <div style={styles.div}>
      <img src={path} alt="" style={styles.img} />
    </div>
  );
};

export default ImageViewer;
