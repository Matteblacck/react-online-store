import ClothesItemCard from "../ClothesItem/ClothesItemCard";
import clotheData from "../ClothesItem/clotheData" 
const productCards = clotheData.map((item) => (
    <div key={item.id} className="col-12 col-md-6 col-xl-4 mb-4">
      <ClothesItemCard
        id={item.id}
        type={item.type}
        name={item.name}
        price={item.price}
        image={item.image}
        images={item.images}
        description={item.description}
      />
    </div>
  ));

export default function WearPage(){
    return(
        <>
        <div className="container">
            <div className="row">
                {productCards}
            </div>
        </div>
        </>
    )
}