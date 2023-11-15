import "./app.scss";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="Services">Parallax</section>
      <section id="Portfolio">Services</section>
      <section>Parallax</section>
      <section>Portfolio 1</section>
      <section>Portfolio 2</section>
      <section>Portfolio 3</section>
      <section id="Contacts">Contact</section>
    </div>
  );
}

export default App;
