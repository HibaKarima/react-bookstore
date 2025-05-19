import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { TbTrash } from "react-icons/tb";
import CartTotal from "../Components/CartTotal";
import { toast } from "react-toastify";
import Footer from "../Components/Footer";

function Cart() {
  const { books, navigate, cartItems, UpdateQuantity, UndoToast } =
    useContext(ShopContext);

  //  دالة إزالة عنصر مع إمكانية التراجع
  const handleRemoveItem = (itemId) => {
    const previousQuantity = cartItems[itemId];

    UpdateQuantity(itemId, 0); // حذف العنصر

    const handleUndo = () => {
      UpdateQuantity(itemId, previousQuantity); // استرجاع الكمية عند التراجع
    };

    const renderUndoToast = ({ closeToast }) => (
      <UndoToast onUndo={handleUndo} closeToast={closeToast} />
    );

    toast(renderUndoToast, {
      className: "my-toast",
      bodyClassName: "my-toast-body",
      progressClassName: "my-toast-progress",
      icon: (
        <span aria-label="trash" style={{ fontSize: "20px" }}>
          🗑️
        </span>
      ),
    });
  };

  return (
    <section className="container my-5">
      <div className="pt-5">
        <Title title1={"Cart"} title2={"List"} title1Styles={"h3"} />
        <div className="mt-5">
          {books.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className="rounded shadow-lg p-5">
                  <div className="d-flex gap-3">
                    <div className="d-flex align-items-start gap-3">
                      <img
                        src={item.image}
                        alt="itemImg"
                        className="rounded"
                        style={{ width: "5rem", height: "7.5rem" }}
                      />
                    </div>
                    <div className="d-flex flex-column w-100 justify-content-center">
                      <h5 className="my-0 text-md-truncate">{item.name}</h5>
                      <div className="d-flex align-items-start justify-content-between">
                        <div>
                          <p className="mb-1">{item.category}</p>
                          <div
                            className="d-flex align-items-center overflow-hidden shadow py-0 px-3"
                            style={{ borderRadius: "30px" }}
                          >
                            <button
                              onClick={() =>
                                UpdateQuantity(item._id, cartItems[item._id] - 1)
                              }
                              className="p-2 rounded-lg border-0 d-flex align-items-center justify-content-center cartNumBtn"
                              style={{
                                backgroundColor: "var(--color-btn-link)",
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                              }}
                            >
                              <FaMinus className="text-xs" />
                            </button>
                            <p className="p-2 fs-5 d-flex align-items-center justify-content-center">
                              {cartItems[item._id]}
                            </p>
                            <button
                              onClick={() =>
                                UpdateQuantity(item._id, cartItems[item._id] + 1)
                              }
                              className="p-2 rounded-lg border-0 d-flex align-items-center justify-content-center cartNumBtn"
                              style={{
                                backgroundColor: "var(--color-btn-link)",
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                              }}
                            >
                              <FaPlus className="text-xs" />
                            </button>
                          </div>
                        </div>
                        <h4>${item.price}</h4>
                        {/* ✅ زر الحذف المعدل */}
                        <TbTrash
                          style={{ fontSize: "30px", cursor: "pointer" }}
                          onClick={() => handleRemoveItem(item._id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="d-flex mt-5">
          <div className="w-md-100 w-small">
            <style>{`
              @media(min-width:500px){
                .w-small{
                  width:450px
                }
              }
            `}</style>
            <CartTotal />
            <button
              onClick={() => navigate("/place-order")}
              className="mt-5 rounded border-0 shadow btn btnS"
              style={{ fontWeight: "600" }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default React.memo(Cart);
