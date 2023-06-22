import Main from "./components/Main";
import { GlinvergyProvider } from "./context/GlinvergyProvider";

function App() {
  return (
    <GlinvergyProvider>
      <Main />
    </GlinvergyProvider>
  );
}

export default App;
