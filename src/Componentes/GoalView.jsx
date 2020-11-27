import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

export const GoalView = () => {
  return (
    <Fragment>
      <h2 className="metas">Tus metas</h2>

      <div className="containerGoal">
        <div className="containerGoal1">
          <img src="./Imagenes/foto1.png" alt="photo2" className="Img2" />
          <div className="infoStadistics">
            <spam>Viaje a Islas</spam>
            <spam className="canarias">Canarias</spam>
          </div>

          <div className="infoStadistics1">
            <FontAwesomeIcon icon={faChartPie} />
            <spam className="porcentaje">20%</spam>
            <div className="infoStadistics2">
              <spam className="valor1">$ 1.630.000</spam>
              <spam className="valor2"> $ 8.000.000</spam>
            </div>
          </div>
        </div>

        <div className="containerGoal2">
          <div className="infoLaptop">
            <img src="./Imagenes/foto2.png" alt="photo3" className="Img3" />
            <spam className="nameMc">Macbook Pro</spam>
          </div>

          <div className="containerStadistics">
            <FontAwesomeIcon icon={faChartPie} />
            <spam className="porcentaje">0%</spam>
            <div className="containerStadistics1">
              <spam className="valor1">$ 0</spam>
              <spam className="valor2"> $ 7.000.000</spam>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
};