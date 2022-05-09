
import NavBar from "./components/NavBar";
import ProductListing from "./components/ProductListing";
import ProductPaginator from "./components/ProductPaginator";

export default function App() {
  return (
    <div>
     <NavBar/>
     <ProductListing/>
     <ProductPaginator/>
    </div>
  );
}