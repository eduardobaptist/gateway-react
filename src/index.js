import React from 'react';
import ReactDOM from 'react-dom/client';

//CSS global
import "./style/global.css";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Rotas from './rotas.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <Rotas />
  </>
);
