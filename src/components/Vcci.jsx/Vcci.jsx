import React, { useState } from "react";
import logo from "../../assets/vcci_logo.2dd1f9f5.jpg";
import "./Vcci.scss";
function Vcci() {
  const [inputValue, setInputValue] = useState("");
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleClickSubmit = () => {
    const test = "0110010000";
    if (inputValue == test) {
      window.location.href = "/step";
    }
    if (inputValue != test) {
      window.location.href = "/error";
    }
  };
  return (
    <>
      <div className='container-vcci'>
        <div className='wrapper-vcci'>
          <div className='child-top-vcci'>
            <div className='child-top-left-vcci'>
              <p className='text-imformation'>
                Thực hiện Chỉ thị số 01/CT-TTg của Thủ tướng Chính phủ về “Thúc
                đẩy phát triển doanh nghiệp công nghệ số Việt Nam”. Từ ngày 1/4
                đến 31/07/2022, Liên đoàn thương mại và công nghiệp Việt Nam
                (VCCI) đã triển khai chương trình Khảo sát chuyển đổi số toàn
                quốc với sự tham gia tích cực của 190.262 doanh nghiệp tại 63/63
                địa phương trên cả nước. Trong giai đoạn đầu, VCCI đã ban hành
                Công văn số 2211/PTM-CĐS ngày 01/11/2022 phối hợp với Cục thuế
                Thành phố Hà nội, lựa chọn triển khai thí điểm cho 3.000 Doanh
                nghiệp đầu tiên tại Thành phố Hà nội đáp ứng các yêu cầu của
                chương trình và đã đăng ký trong chương trình Khảo sát chuyển
                đổi số doanh nghiệp - VCCI 2022. Từng bước cùng doanh nghiệp ứng
                dụng CNTT và chuyển đổi số nhằm nâng cao hiệu quả sản xuất kinh
                doanh, gia tăng những trải nghiệm số cụ thể trong hoạt động của
                doanh nghiệp cũng như người lao động. Đồng thời lựa chọn các đối
                tác uy tín là Ngân hàng Techcombank, KienLongBank và Tập đoàn
                Sunshine, UniCloud,... cung cấp những giải pháp về ngân hàng số,
                tài chính, công nghệ,... tốt nhất gồm nhiều ưu đãi và áp dụng
                riêng để hỗ trợ chuyển đổi số cho các doanh nghiệp tham gia
                trong chương trình thí điểm này.
              </p>
            </div>
            <div className='child-top-right-vcci'>
              <div className='right-head'>
                <div className='box-img-head'>
                  <img src={logo} alt='' />
                </div>
                <p className='text-imformation1'>
                  VCCI trân trọng đề nghị Quý Doanh nghiệp đã được Cục thuế địa
                  phương gửi thông báo, hãy nhập mã số thuế và nhấn "Bắt đầu".
                </p>
                <input
                  value={inputValue}
                  type='text'
                  placeholder='Vui lòng nhập Mã số thuế doanh nghiệp'
                  name=''
                  id=''
                  onChange={handleChangeInput}
                />
                <div className='submit-btn'>
                  <button onClick={handleClickSubmit}>Bắt đầu</button>
                </div>
                <p className='text-information2'>
                  Chú ý: Do việc đăng ký và xác nhận để tham gia chương trình hỗ
                  trợ của VCCI chỉ giới hạn đợt đầu cho 3.000 doanh nghiệp, vì
                  vậy kính đề nghị Doanh nghiệp cử người đại diện đủ thẩm quyền
                  (hoặc được Uỷ quyền) thực hiện khảo sát.
                </p>
              </div>
            </div>
          </div>
          <div className='child-bottom-vcci'>
            <p className='text-information3'>Khảo sát của VCCI</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vcci;
