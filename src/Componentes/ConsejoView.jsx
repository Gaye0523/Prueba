import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


const ConsejoView = () => {
  return (
    <Fragment>
      <div className="containerConsejos">
        <img src="./Imagenes/foto4.png" alt="info1" className="img1" />
        <img src="./Imagenes/foto5.png" alt="info2" className="img1" />
        <img src="./Imagenes/foto6.png" alt="info3" className="img1" />
      </div>

      <div className="containerInfo">
        <spam className="titulo">10 gastos que debes evitar</spam>
        <spam className="parrafo">Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.O</spam>
      </div>

      <Footer />
    </Fragment>
  );
}

export default ConsejoView;


export const Footer = () => {
  return (
    <Fragment>
      <div className="containerIcon">
        <div className="containerHome">
          <FontAwesomeIcon icon={faHome} />
          <spam className="home">Inicio</spam>
        </div>

        <div className="containerHistorial">
          <FontAwesomeIcon icon={faBars} />
          <spam className="historial">Historial</spam>
        </div>
      </div>

      <div className="containerIcon1">
        <div className="containPerfil">
          <FontAwesomeIcon icon={faPortrait} />
          <spam className="perfil">Mi perfil</spam>
        </div>

        <div className="containerMore">
          <FontAwesomeIcon icon={faEllipsisH} />
          <spam className="more">Más</spam>
        </div>
      </div>

      <div className="containerAhorrar">
      <FontAwesomeIcon icon={faPlusCircle} />
      <spam className="ahorrar">Ahorrar</spam>
      </div>

    </Fragment>
  );
}


