import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const QrScanner = () => {
  
  let history = useHistory();
  const [showScanner, setShowScanner] = useState(false);

  const errorMessage = () => toast.error('An error has occurred', {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const handleScan = (data) => {
    if (data) {
     
      let split = data.split("/");
      if (split.length > 4) {
        history.push(`/item/${split[4]}`);
      } else {
        errorMessage()
      }
    }
  };


  const toggleScanner = () => {
    setShowScanner(!showScanner);
  };
  return (
    <div className="qr-scanner">
        <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
         />
      
      <h1 className="section-title">Welcome to Spec's Audio Beer Guide.</h1>
      <h4 className="section-subtitle">Scan a QR code to get started</h4>
      {showScanner ? (
        <QrReader
          delay={1000}
          onError={errorMessage}
          onScan={handleScan}
          style={{ width: "90%" }}
        />
      ) : null}

      <button className="scan-button" onClick={toggleScanner}>
        {" "}
        {showScanner ? "cancel" : "scan code"}{" "}
      </button>
    </div>
  );
};

export default QrScanner;
