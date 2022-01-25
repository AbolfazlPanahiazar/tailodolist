import { FC } from "react";

import Router from "./router/Router";
import GlobalStore from "store/Store";

const App: FC = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <GlobalStore>
        <Router />
      </GlobalStore>
    </div>
  );
};

export default App;
