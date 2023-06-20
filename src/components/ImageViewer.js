export const ImageViewer = ({ path }) => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <img src={path} alt="" style={{ maxWidth: "30vw" }} />
    </div>
  );
};
