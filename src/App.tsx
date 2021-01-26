import { FC, useState, useEffect, useLayoutEffect} from "react";



const App: FC = () => {

  const [produto, setProduto] = useState<string>("");

  useEffect(() => {
    setProduto("Thorin");
    console.log("Cheguei no useEffect :>>");
  }, []);

  useLayoutEffect(() => {

    console.log("Cheguei no useLayoutEffect :>> ");
  }, []);


  return (
  
    <div>
      <input
      
        type="text"
        placeholder="produto"
        value={produto}
        onChange={(event) => setProduto(event.target.value)}
      
      />
      <h2>{produto}</h2>


    </div>
    
    );
}

export default App;