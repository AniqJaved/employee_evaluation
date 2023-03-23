import React, { useState,useContext, useEffect } from 'react';
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";




export default function AddProductForm ({onAddProduct}) {

    const {config, dispatch} = useContext(ConfigContext)
    
    
    
    useEffect(() => {
        getConfig(dispatch)
          .then(() => setIsLoading(false))
          .catch((error) => console.error(error));
      }, [dispatch]);

    const productList = config.filter(obj => obj.configType === "devProduct")

    const [selectedProduct, setSelectedProduct] = useState('');
    const [noOfProduct, setNoOfProduct] = useState('');
    
    const [isLoading, setIsLoading] = useState(true);

    function handleSelection(productId, isSelected) {
        if (isSelected) {
            setSelectedProduct(productId);
        } else {
            setSelectedProduct(null);
        }
      }

    const handleAddProduct = (event) => {
        event.preventDefault();
        if (selectedProduct && noOfProduct) {
            onAddProduct(selectedProduct, noOfProduct);
            // setSelectedCourse('');
            // setCourseContribution('');
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
      }
    
    return (
        <>
            <form>
                <label>
                    Product:
                    <ul>
                        {
                            productList.map((product) => (
                            <li key={product._id}>
                                <label>
                                    <input
                                    type="radio"
                                    name="project-selection"
                                    checked={selectedProduct === product._id}
                                    onChange={(e) =>
                                        handleSelection(product._id, e.target.checked)
                                    }
                                    />
                                    {product.productType}
                                </label>
                            </li>
                            ))}
                    </ul>
                </label>
                <label>
                    Number of Products:
                    <input type="number" value={noOfProduct} onChange={(e) => setNoOfProduct(e.target.value)} />
                </label>
                <button onClick={handleAddProduct} type="submit">Add Product</button>
            </form>
        </>
    );
};

