import { styles } from "./styled";

const AudioPlayer = ({ path }) => {
  return (
    <div style={styles.div}>
      <audio controls style={styles.div}>
        <source src={path} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
