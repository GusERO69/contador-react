const Contador = () => {
  const [numero, setNumero] = React.useState(0);

  const aumento = () => {
    setNumero(numero + 1);
  };

  //   const disminuir = () => {
  //     setNumero(numero - 1);
  //   };

  return (
    <div>
      <h1 className={numero > 0 ? "higher" : "lower"}>Contador: {numero}</h1>
      <hr />
      <button onClick={aumento}>Aumentar</button>
      <button
        onClick={() => {
          setNumero(numero - 1);
        }}
      >
        Disminuir
      </button>
    </div>
  );
};
