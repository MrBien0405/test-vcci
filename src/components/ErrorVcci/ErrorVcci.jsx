import React from "react";
import logo from "../../assets/vcci.png";
import "./ErrorVcci.scss";
function ErrorVcci() {
  return (
    <>
      <div className='error-vcci'>
        <div className='container-error-vcci'>
          <div className='box-error-vcci'>
            <img src={logo} alt='' />
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorVcci;
