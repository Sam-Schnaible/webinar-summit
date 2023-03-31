import './App.css';
import React from 'react';
import AppRoutes from "./routes/AppRoutes";

class App extends React.Component {
  render() {
    return (
      <div>
        <AppRoutes />
      </div>
    );
  }
}

export default App;