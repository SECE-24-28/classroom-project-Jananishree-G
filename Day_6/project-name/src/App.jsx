import Cart from "./Component/Cart"
import Header from "./Component/Header"
import Product from "./Component/Product"

const App = ()=>{
    return(
        <div>
            <h1> My Page </h1>

            <Product age="19"/>
            <Cart/>
            <Header/>
        </div>
    )
}
export default App