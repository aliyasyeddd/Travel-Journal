import "./App.css";
import Header from "./Components/Header";
import Entry from "./Components/Entry";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Entry />
      </main>
    </>
  );
}
