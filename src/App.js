import React, { Fragment } from 'react';
import FirstView from './Componentes/Name.jsx';
import {SummaryHome} from './Componentes/ValueCard.jsx';
import {GoalView} from './Componentes/GoalView.jsx';
import {PortafolioView} from './Componentes/PortafolioView.jsx';
import AhorroView from './Componentes/AhorroView.jsx';
import ConsejoView from './Componentes/ConsejoView.jsx';
import './Style/Name.scss';
import './Style/ValueCard.scss';
import './Style/GoalView.scss';
import './Style/PortafolioView.scss';
import './Style/AhorroView.scss';
import './Style/ConsejoView.scss'

function App() {
  return (
    <Fragment>
      <FirstView />
      <SummaryHome />
      <GoalView />
      <PortafolioView />
      <AhorroView />
      <ConsejoView />
    </Fragment>
  );
}

export default App;
