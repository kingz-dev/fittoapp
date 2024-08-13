import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </main>
  );
}

export default App;
