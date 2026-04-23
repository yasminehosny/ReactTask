import Card from "./Card";

function CardsContainer({ data }) {
  return (
    <>
  
    <div className="cards">
      {data.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
    </>
  );
}

export default CardsContainer;