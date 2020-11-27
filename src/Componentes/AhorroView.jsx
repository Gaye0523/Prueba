import React, { Fragment } from 'react';



export const AhorroImg = () => {
  return (
    <Fragment>
      <div className="ahorroImg">
        <img src="./Imagenes/foto3.png" alt="ahorro" className="ahorro"/>
        <img src="./Imagenes/foto10.png" alt="fondo" className="fondo"/>
      </div>
      <div className="ahorroInfo">
        <spam className="ahorro">Esto es AHORRO</spam>
        <spam className="conoce">Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.</spam>
      </div>
    </Fragment>

  );
};

const AhorroView = () => {
  return (
    <Fragment>
      <div className="tituloAhorro">
        <spam>Los P*t@s del ahorro</spam>
      </div>
      <AhorroImg />
    </Fragment>
  );
}

export default AhorroView;