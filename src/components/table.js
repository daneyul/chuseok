import React from "react";
import "../styles/landing.scss";
import "../styles/images.scss";
import table from "../images/landing/table.svg"

const Tableimage = () => (

  <div class="row justify-content-between header-mb">
    <div class="col-5 justify-content-start">
      <a href="/table" onClick="window.location.reload();">
      <div class="table-box">
        <h2 class="table-header">Set up the table</h2>
        <p class="mt-4">Here are some guidelines to placing food on the table.</p> 
        <p>Although, setting up the table the right way isn’t so crucial these days.</p>
      </div>
      </a>
    </div>
    <div class="col-7 justify-content-end">
      <a href="/table" onClick="window.location.reload();">
      <img src={table} alt="table" />
      </a>
    </div>
  </div>

)

export default Tableimage
