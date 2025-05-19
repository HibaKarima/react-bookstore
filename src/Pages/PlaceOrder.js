import React, { useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import page2 from "../assets/page22.png";
import Footer from "../Components/Footer";

function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  return (
    <section className="container mt-5 pt-5">
      <form className="pt-2">
        <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-3 justify-content-between h-auto">
          {/* left side */}
          <div className="position-relative px-4 text-center">
            <div
              style={{
                position: "absolute",
                zIndex: "-1",
                left: "-3px",
                top: "-20px",
              }}
              className="h-100 w-100"
            >
              <img
                src={page2}
                alt="page2Image"
                className="h-100"
                style={{ width: "100%" }}
              />
            </div>
            <div className="d-flex flex-column gap-2 m-3 container">
              <Title
                title1={"Delivery"}
                title2={"Information"}
                title1Styles={"h3"}
              />
              <div className="d-flex flex-column flex-md-row gap-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="py-1 ps-3 m-2 rounded outline-0 border-0 shadow "
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="py-1 ps-3 m-2 rounded outline-0 border-0 shadow"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="py-1 ps-3 m-2 rounded outline-0 border-0 shadow"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="py-1 m-2 ps-3 rounded outline-0 border-0 shadow"
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                className="py-1 m-2 ps-3 rounded outline-0 border-0 shadow"
              />
              <div className="d-flex gap-md-2 gap-1">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="py-1 m-2 ps-3 rounded outline-0 border-0 shadow w-50"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="py-1 m-2  ps-3 rounded outline-0 border-0 shadow w-50"
                />
              </div>
              <div className="d-flex gap-md-2 gap-1">
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Zip Code"
                  className="py-1 m-2 ps-3 rounded outline-0 border-0 shadow w-50"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="py-1 m-2 ps-3 rounded outline-0 border-0 shadow w-50"
                />
              </div>
              <div className="my-5 w-100 my-md-2">
                <h3
                  className=" mb-3 text-start"
                  style={{ color: "var(--color-txt-hover)" }}
                >
                  Payment
                  <span style={{ color: "var(--color-txt-second)" }}>
                    {" "}
                    Method
                  </span>
                </h3>
                <div className="d-flex gap-2">
                  <div
                    onClick={() => setMethod("strip")}
                    className={`${method === "strip"
                        ? "btn-secondary text-white"
                        : "btn-white"
                      } py-1 btn shadow`}
                    style={{
                      cursor: "pointer",
                      color: "var(--color-txt-hover)",
                    }}
                  >
                    Strip
                  </div>
                  <div
                    onClick={() => setMethod("cod")}
                    className={`${method === "cod"
                        ? "btn-secondary text-white"
                        : "btn-white"
                      } py-1 pl-2 btn shadow`}
                    style={{
                      cursor: "pointer",
                      color: "var(--color-txt-hover)",
                    }}
                  >
                    Cash Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="d-flex flex-column pt-5 w-75 container w-md-50 ">
            <CartTotal />
            {/* payment method */}

            <div className="mx-1 my-5 container">
              <button
                type="submit"
                className="btn btnS w-100"
                style={{ fontWeight: "600" }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </section>
  );
}

export default React.memo(PlaceOrder);
