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
  addMediaModal: {
    background: "#fff",
    padding: "30px",
    borderRadius: "4px",
    maxWidth: "500px",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },

  formField: {
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginBottom: "10px",
    fontWeight: "bold",
  },

  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    boxSizing: "border-box",
  },

  select: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    boxSizing: "border-box",
  },

  formActions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },

  saveButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    marginRight: "10px",
    cursor: "pointer",
    background: "#4caf50",
    color: "#fff",
    fontWeight: "bold",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },

  closeButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    marginRight: "10px",
    cursor: "pointer",
    background: "#ff4d4f",
    color: "#fff",
    fontWeight: "bold",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};
