import { styles } from "./styled";

const VideoPlayer = ({ path }) => {
  return (
    <div style={styles.div}>
      <video controls style={styles.video}>
        <source src={path} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
