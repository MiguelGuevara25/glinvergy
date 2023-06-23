import AppCrud from "./components/AppCrud";
import { GlinvergyProvider } from "./context/GlinvergyProvider";

function App() {
  return (
    <GlinvergyProvider>
      <AppCrud />
    </GlinvergyProvider>
  );
}

export default App;
