import Login from "./components/Login";
import { GlinvergyProvider } from "./context/GlinvergyProvider";

function App() {
  return (
    <GlinvergyProvider>
      <Login />
    </GlinvergyProvider>
  );
}

export default App;
