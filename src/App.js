import "./App.css";
import Navbar from "./componants/Navbar";
import Photo from "./componants/Photo";
import Jumbotron from "./componants/Jumbotron";
import CardSection from "./componants/CardSection";
import Footer from "./componants/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Photo />
      <Jumbotron />
      <CardSection />
      <Footer />
    </div>
  );
}

export default App;
