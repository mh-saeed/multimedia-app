import React, { useState, useEffect } from "react";
import { data } from "./data";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import {
  AudioPlayer,
  ChartModal,
  Delete,
  DocumentViewer,
  Download,
  FilesBreakdown,
  Header,
  ImageViewer,
  Rename,
  ShareButton,
  VideoPlayer,
} from "./components";
import { styles } from "./styled";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function App() {
  const [myFiles, setMyFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [filePath, setFilePath] = useState("/file-server/");
  const [showChartModal, setShowChartModal] = useState(false);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("myFiles"));

    if (!storedFiles || storedFiles.length === 0) {
      setMyFiles(data);
      localStorage.setItem("myFiles", JSON.stringify(data));
    }

    if (storedFiles && storedFiles.length > 0) {
      setMyFiles(storedFiles);
    }
  }, []);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("myFiles"));

    if (myFiles.length > 0 || storedFiles.length === 1) {
      localStorage.setItem("myFiles", JSON.stringify(myFiles));
    }
  }, [myFiles]);

  var barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Files Breakdown",
      },
    },
  };

  return (
    <>
      {showChartModal && (
        <ChartModal
          setShowChartModal={setShowChartModal}
          myFiles={myFiles}
          barChartOptions={barChartOptions}
        />
      )}
      <div className="App">
        <Header />
        <div style={styles.container}>
          <div style={{ padding: 10, paddingBottom: 0 }}>
            <p style={{ fontWeight: "bold" }}>My Files</p>
            <p>{selectedFile ? selectedFile.path : filePath}</p>
          </div>
          <div style={styles.controlTools}>
            <Rename
              styles={styles}
              selectedFile={selectedFile}
              myFiles={myFiles}
              setMyFiles={setMyFiles}
            />
            <FilesBreakdown
              styles={styles}
              setShowChartModal={setShowChartModal}
            />
            <Download styles={styles} selectedFile={selectedFile} />
            <Delete
              styles={styles}
              selectedFile={selectedFile}
              myFiles={myFiles}
              setMyFiles={setMyFiles}
            />
            <ShareButton
              selectedFile={selectedFile}
              myFiles={myFiles}
              setMyFiles={setMyFiles}
              setSelectedFile={setSelectedFile}
            />
          </div>
          <div style={styles.fileContainer}>
            <div style={{ width: "100%", padding: 10 }}>
              {myFiles.map((file) => {
                if (file.path.slice(0, filePath.length) === filePath) {
                  return (
                    <div
                      style={styles.file}
                      className="files"
                      key={file.id}
                      onClick={() => {
                        if (selectedFile && selectedFile.id === file.id) {
                          setSelectedFile(null);
                          return;
                        }
                        setSelectedFile(file);
                      }}
                    >
                      <p>{file.name}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            {selectedFile && (
              <div style={styles.fileViewer}>
                {selectedFile.type === "video" && (
                  <VideoPlayer path={selectedFile.path} />
                )}
                {selectedFile.type === "audio" && (
                  <AudioPlayer path={selectedFile.path} />
                )}
                {selectedFile.type === "document" && (
                  <DocumentViewer path={selectedFile.path} />
                )}
                {selectedFile.type === "image" && (
                  <ImageViewer path={selectedFile.path} />
                )}
                <p style={{ fontWeight: "bold", marginTop: 10 }}>
                  {selectedFile.name}
                </p>
                <p>
                  path:{" "}
                  <span style={{ fontStyle: "italic" }}>
                    {selectedFile.path}
                  </span>
                </p>
                <p>
                  file type:{" "}
                  <span style={{ fontStyle: "italic" }}>
                    {selectedFile.type}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
