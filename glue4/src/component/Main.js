import productData from "../data.json";
import MyCard from "./MyCard";
import MyForm from "./MyForm";

function Main(){

    return(
      <>
        {productData.map((product) => {
            return(
                <MyCard
                userName = {product.username}
                email = {product.email}
                city = {product.address.city}
                />
            )
        })}

        <MyForm />

      </>




    )
}


export default Main;


