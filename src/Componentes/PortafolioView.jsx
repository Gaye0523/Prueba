import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export const TituloPortafoilio  = () => {
  return (  
    <Fragment>
      <div className="containerTitulo">
      <spam className="titulo">Conoce tu portafolio</spam>
      <div className="containerEstratega">
      <spam className="estratega">Estratega</spam>
      </div>
      </div>
    </Fragment>
  );
}
 

export const PortafolioView = () => {
  return (
    <Fragment>
      <TituloPortafoilio/>

      <div className="containerPortafolio">
        <div className="containerRobot">
          <div>
            <img src="./Imagenes/foto8.png" alt="robot" className="robot" />
            <img src="./Imagenes/foto7.png" alt="pai" className="pai" />
          </div>
          <div className="containerInfo">
            <spam className="advisor">RoboAdvisor</spam>
            <spam className="fondos">10 Fondos</spam>
          </div>
        </div>

        <div className="containerSkandia">
          <div className="logoSkandia">
            <img src="./Imagenes/foto9.png" alt="logo" className="logo" />
            <div className="porcentaje">
              <spam>15%</spam>
            </div>
          </div>

          <div className="containerInfoSkandia">
            <spam className="fic">FIC Old Mutual Efectivo</spam>
            <spam className="valor">$ 240.000</spam>
            <spam className="tipo">Tipo de activo</spam>
            <spam className="renta">Renta fija</spam>
            <spam className="deposito">Depósito a la fija</spam>
          </div>
        </div>
      </div>
      <div className="infoDinero">
        <samp>Tu  dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.</samp>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faChevronLeft} />
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </Fragment> 
  );
};