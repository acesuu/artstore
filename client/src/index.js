import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const rootElement = document.getElementById("root");
//     ReactDOM.render(
      
     
//       <BrowserRouter>
//        <App /><Routes>
//         <Route exact path="/Slider" component={Slider} />
//         <Route path="/Productlist" component={Productlist} />
//       </Routes>
//       </BrowserRouter>,
//       rootElement
//     );