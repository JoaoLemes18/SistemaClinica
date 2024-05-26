import "../styles/PerfilFirstLetter.scss";

const PerfilFirstLetter = ({ word }: { word: string }) => {
  // Verifica se 'word' é uma string não vazia antes de acessar o primeiro caractere
  const firstLetter =
    word && word.length > 0 ? word.charAt(0).toUpperCase() : "";

  return (
    <div className="perfilFirstLetter">
      <p>{firstLetter}</p>
    </div>
  );
};

export default PerfilFirstLetter;
