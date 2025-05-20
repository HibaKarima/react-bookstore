import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import books from "../assets/data";
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [cartItems, setCartItems] = useState({});
    const delivery_charges = 5;
    //adding items to cart
    const addToCart = async (itemId) => {
        const cartData = { ...cartItems };
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    };
const UndoToast = ({ onUndo, closeToast }) => (
  <div className="d-flex justify-content-between align-items-center ">
                                  <span>...Order Removed </span>
                                  <button
                                    className="btn btn-link btn-sm text-danger"
                                    style={{
                                      fontWeight: "600",
                                    }}
                                    onClick={() => {
                                      onUndo();
                                      closeToast();
                                    }}
                                  >
                                    Undo
                                  </button>
                                </div>
);
    // Getting total cart items
    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            try {
                if (cartItems[item] > 0) {
                    totalCount += cartItems[item];
                }
            } catch (error) {
                console.log(error);
            }
        }
        return totalCount;
    };

    // Getting total cart amount
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = books.find((book) => book._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    //Updating the Quantity

    const UpdateQuantity = async (itemId, quantity) => {
        const cartData = { ...cartItems };
        cartData[itemId] = quantity;
        setCartItems(cartData);
    };
    const contextValue = {
        books,
        navigate,
        token,
        setToken,
        cartItems,
        setCartItems,
        addToCart,
        getCartCount,
        getCartAmount,
        UpdateQuantity,
        delivery_charges,
        UndoToast
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;
