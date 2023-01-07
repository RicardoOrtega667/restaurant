import { db } from "./firebase/firebase";
import Card from "./componentes/Card"
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect,useState } from "react";

function App() {
  const [menu, setMenu] = useState("");

  async function getFood() {
    const alimentosCol = collection(db, "alimentos");
    const alimentosSnapshot = await getDocs(alimentosCol);
    const alimentosList = alimentosSnapshot.docs.map((doc) => doc.data());
    setMenu(alimentosList);
  }

  useEffect(() => {
    getFood();
  }, []);

  return (
    <div className="App">
      {menu &&
        menu.map((alimento) => {
          return <Card key={alimento.descripcion} alimento={alimento}/>;
        })}
    </div>
  );
}

export default App;
