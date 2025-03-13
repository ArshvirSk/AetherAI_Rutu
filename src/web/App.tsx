import React, { useState } from "react";
import DeFiPanel from "./components/DeFiPanel";
import LiquidityOptimizer from "./components/LiquidityOptimizer";

const App: React.FC = () => {
  const [isWalletConnected, setIsWalletConnectted] = useState<boolean>(false);

  return (
    <div className="app">
      <h1>Welcome to AetherAI</h1>
      <div className="panels-container">
        <DeFiPanel isConnected={isWalletConnected} />
        <LiquidityOptimizer />
      </div>
    </div>
  );
};

export default App;
