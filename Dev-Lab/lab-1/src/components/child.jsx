import React from 'react'

function TemperatureStatus(props) {
  const temp = Number(props.temperature);

  return (
    <div>
      {isNaN(temp) ? (
        <h2>Valid Temperature Daal na Bhai</h2>
      ) : temp > 35 ? (
        <h2>Status: Hot</h2>
      ) : (
        <h2>Status: Normal</h2>
      )}
    </div>
  );
}

export default TemperatureStatus;
