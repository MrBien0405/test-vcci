import React from "react";
import logo from "../../assets/login.d814adb7.png";
import logo1 from "../../assets/vcci_logo.2dd1f9f5.jpg";
import "./ErrorVcci.scss";
function ErrorVcci() {
  return (
    <>
      <div className='error-vcci'>
        <div className='container-error-vcci'>
          <div className='left-error-vcci'>
            <div className='box-error-vcci'>
              <img src={logo} alt='' />
            </div>
          </div>
          <div className='right-error-vcci'>
            <div className='box-img-logo-vcci'>
              <img src={logo1} alt='' />
            </div>
            <p className="error-text-vcci">Thông báo</p>
            <p className="error-text-vcci-1">Doanh nghiệp của bạn chưa được hỗ trợ tham gia đợt 1.</p>
            <p className="error-text-vcci-2">
              Vui lòng liên hệ Tổ chuyển đổi số VCCI qua email
              <a href="/"> chuyendoiso@vcci.com.vn </a> để được hỗ trợ.
            </p>
            <p className="error-text-vcci-3">Trân trọng cám ơn!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorVcci;
