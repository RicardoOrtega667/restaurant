import { db } from "./firebase/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect } from "react";

function App() {
  async function getFood() {
    const alimentosCol = collection (db, "alimentos");
    const alimentosSnapshot = await getDocs(alimentosCol);
    const alimentosList = alimentosSnapshot.docs.map((doc) => doc.data());
    console.log(alimentosList);
  }

  
  useEffect(() => {
    getFood()
  }, []);
  

  return <div className="App">
    

  </div>;
}

export default App;
