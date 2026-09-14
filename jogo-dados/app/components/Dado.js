export default function Dado({ valor }) {
  return (
    <img
      src={`/dados/${valor}.svg`}
      alt={`Dado com valor ${valor}`}
      width={80}
      height={80}
    />
  );
}