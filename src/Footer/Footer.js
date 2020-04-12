import React from "react";

import "./Footer.css";

function Footer({ totalItemsQuantity }) {
  return (
    <tfoot>
      <tr>
        <td className="footer-total" colSpan="2">
          Total:
        </td>
        <td className="footer-qty">{totalItemsQuantity}</td>
      </tr>
    </tfoot>
  );
}

export default Footer;
