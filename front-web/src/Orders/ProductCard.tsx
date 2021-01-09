import { formatPrice } from "./helpers";
import { Product } from "./types";

type Props ={
    product: Product;
    onSelectedProduct : (product: Product) => void;
    isSelected: boolean;
}

function ProductCard({ product, onSelectedProduct, isSelected } : Props){
    return (
        <div 
            className={`order-card-container ${isSelected ? 'selected' : ''} `}
            onClick={() => onSelectedProduct(product)}
        >
            <div className="order-card-content">
                <h3 className="order-card-title">
                    {product.name}
                </h3>             
                <img className="order-card-image" src={product.imageUri} alt={product.name}/>
                <h3 className="order-card-price">{formatPrice(product.price)}</h3>
                <div className="order-card-description">
                    <h3>Descrição</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;