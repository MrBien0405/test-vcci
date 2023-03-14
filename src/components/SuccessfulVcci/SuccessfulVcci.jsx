import React from "react";
import logo from "../../assets/vcci_logo.2dd1f9f5.jpg";
import "./SuccessfulVcci.scss";
function SuccessfulVcci() {
  return (
    <div className='successfulvcci-container'>
      <div className='wrapper-sucessful-vcci'>
        <div className='box-img-successfull-vcci'>
          <div className='img-successfull-vcci'>
            <img src={logo} alt='' />
          </div>
        </div>
        <div className='sucessful-vcci-child'>
          <p className='successful-vcci1'>Thông báo</p>
          <p className='successful-vcci2'>
            Xin chúc mừng Quý Doanh nghiệp đã đăng ký và khảo sát thành công!
          </p>
          <p className='successful-vcci3'>
            Ban Chỉ đạo Chương trình chuyển đổi số VCCI và các Ngân hàng, đối
            tác uy tín của Chương trình sẽ liên hệ với Quý Doanh nghiệp theo số
            điện thoại (hoặc email) liên hệ đã đăng ký để hướng dẫn nhận các ưu
            đãi, hỗ trợ từ Chương trình Trường hợp cần hỗ trợ thêm hoặc có những
            yêu cầu cụ thể khác, Quý Doanh nghiệp vui lòng liên hệ với Ban Chỉ
            đạo Chương trình qua email: <a href=''>chuyendoiso@vcci.com.vn</a>
          </p>
          <p className='successful-vcci4'>===== LỜI CẢM ƠN =====</p>
          <p className='successful-vcci5'>
            Ban tổ chức Chương trình chân thành cám ơn Ngân hàng Techcombank,
            Tập đoàn Sunshine, Unicloud đã đồng hành và hỗ trợ Chương trình.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuccessfulVcci;
