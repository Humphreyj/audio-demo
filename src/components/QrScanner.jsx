import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom";

const QrScanner = () => {
  let history = useHistory();
  const [showScanner, setShowScanner] = useState(false);

  const handleScan = (data) => {
    if (data) {
      let split = data.split("/");

      history.push(`/item/${split[4]}`);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const toggleScanner = () => {
    setShowScanner(!showScanner);
  };
  return (
    <div className="qr-scanner">
      <h1 className="section-title">Scan a QR code to get started.</h1>
      {showScanner ? (
        <QrReader
          delay={1000}
          onError={handleError}
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
