import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4400/")
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#f0f2f5',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Weather Data</h1>

      <Row
        gutter={[16, 16]}
        justify="center"
        style={{
          maxWidth: '1200px', // Limits the width of the content
          width: '100%',
        }}
      >
        {weatherData.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  src={item.city_img}
                  alt={`${item.city} view`}
                  style={{ height: '150px', objectFit: 'cover' }}
                />
              }
              style={{
                textAlign: 'center', // Center text within the card
              }}
            >
              <Card.Meta title={item.city} />
              <div style={{ marginTop: '10px' }}>
                <p>
                  <strong>Temperature:</strong> {item.temperature}°C
                </p>
                <p>
                  <strong>Pressure:</strong> {item.pressure}
                </p>
                <p>
                  <strong>Wind:</strong> {item.wind}
                </p>
                <img src={item.logo} alt="Weather logo" width={30} />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default App;
