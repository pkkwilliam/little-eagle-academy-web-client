import React from "react";
import { Image } from "react-bootstrap";

const PaymentenrollsTable = ({ enrolls = [] }) => {
  return (
    <div className="table-content table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th className="product-thumbnail">Images</th>
            <th className="cart-product-name">Product</th>
            {/* <th className="product-price">Unit Price</th> */}
            {/* <th className="product-quantity">Quantity</th> */}
            <th className="product-subtotal">Price</th>
          </tr>
        </thead>
        <tbody>
          {(enrolls ?? []).map((item, index) => (
            <tr key={index}>
              <td className="product-thumbnail">
                <Image
                  src={item?.clazz.imageUrls[0]}
                  style={{
                    borderRadius: 8,
                    width: "100%",
                    height: "100%",
                  }}
                  alt="img not found"
                />
              </td>
              <td className="product-name">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.title}
                  <div>
                    <h6 style={{ color: "grey" }}>
                      Student Name: {item.student.lastName}
                    </h6>
                    <h6 style={{ color: "grey" }}>DOB: MISSING!!!</h6>
                  </div>
                </div>
              </td>
              <td className="product-subtotal">
                <span className="amount">${item.clazz.price}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentenrollsTable;