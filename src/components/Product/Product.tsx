import {connect} from "react-redux";
import {StoreState} from "../../reducers/index";
import {productInterface} from "../../reducers/index";
import {AddProduct, DeleteProduct} from "../../actions/ProductActions";

interface ProductProps{
    productsInformation: productInterface[];
    AddProduct: Function;
    DeleteProduct: Function;
}

const Product = (props:ProductProps):JSX.Element =>{
    return(
        <div>
            Product Component
        </div>
    )
}

const mapStateToProps = (state:StoreState) =>({
    productsInformation: state.productsInformation
});
export default connect(mapStateToProps,{AddProduct,DeleteProduct})(Product);