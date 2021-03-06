import React, { useContext } from 'react';
import '../styles/components/Success.css';
import AppContext from '../context/AppContext';
import Map from '../components/Map';

const Home = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div className="Success map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Home;
