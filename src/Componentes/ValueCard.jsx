import React, { Fragment } from 'react';


export const ValueCard = () => {
  return (
    <Fragment>
      <div className="firstContent">
        <img src="./Imagenes/foto.png" alt="photo1" className="Img1" />
        <div className="info1">
          <spam>Eres</spam>
          <spam>Estratega</spam>
        </div>
        <div className="info2">
          <spam className="saldo">Tu saldo</spam>
          <spam>$ 1.570.000</spam>
        </div>
      </div>
    </Fragment>
  );
};

export const SummaryHome = () => {
  return (
    <Fragment>
      <ValueCard />
      <div className="summaryHome">
      <div className="infoInvertion">
        <spam>Inversiòn</spam>
        <spam>$1.600.000</spam>
      </div>
      <div className="infoInvertion1">
        <spam>Rendimiento</spam>
        <spam>-$30.000</spam>
      </div>
      </div>
    </Fragment>
  );
};


