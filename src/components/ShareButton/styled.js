export const styles = {
  controlButton: {
    padding: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  shareModal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "4px",
    maxWidth: "400px",
  },
  shareOptionsList: {
    listStyle: "none",
    padding: 0,
    margin: "10px 0",
  },
  shareOption: {
    cursor: "pointer",
    padding: "5px",
    margin: "5px 0",
    borderRadius: "4px",
    background: "#f5f5f5",
  },
  sharecloseButton: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};