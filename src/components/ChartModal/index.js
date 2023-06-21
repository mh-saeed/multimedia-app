import { Bar, Pie } from "react-chartjs-2";
import { styles } from "./styled";

const ChartModal = ({ setShowChartModal, myFiles, barChartOptions }) => {
  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <div style={styles.modalHeader}>
          <p style={{ fontWeight: "bold" }}>Files Breakdown</p>
          <button
            style={styles.closeButton}
            onClick={() => setShowChartModal(false)}
          >
            close
          </button>
        </div>
        <div style={styles.modalBody}>
          <Pie
            data={{
              labels: ["Video", "Audio", "Document", "Image"],
              datasets: [
                {
                  label: "Files Breakdown",
                  data: [
                    myFiles.filter((file) => file.type === "video").length,
                    myFiles.filter((file) => file.type === "audio").length,
                    myFiles.filter((file) => file.type === "document").length,
                    myFiles.filter((file) => file.type === "image").length,
                  ],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
          <Bar
            data={{
              labels: ["Video", "Audio", "Document", "Image"],
              datasets: [
                {
                  label: "Files Breakdown",
                  data: [
                    myFiles.filter((file) => file.type === "video").length,
                    myFiles.filter((file) => file.type === "audio").length,
                    myFiles.filter((file) => file.type === "document").length,
                    myFiles.filter((file) => file.type === "image").length,
                  ],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={barChartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartModal;
