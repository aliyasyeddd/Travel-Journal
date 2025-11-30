import "./App.css";
import Header from "./Components/Header";
import Entry from "./Components/Entry";
import locationData from './data.js'

export default function App() {

 const entryElements = locationData.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })

  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  );
}
