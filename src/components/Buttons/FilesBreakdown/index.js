const FilesBreakdown = ({ styles, setShowChartModal }) => {
  return (
    <button
      style={styles.controlButton}
      onClick={() => setShowChartModal(true)}
    >
      Files Breakdown
    </button>
  );
};
export default FilesBreakdown;
