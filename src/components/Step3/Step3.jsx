import React, { useState } from "react";
import { Checkbox } from "antd";
import "./Step3.scss";

function Step1(props) {
  let { handleSubmitBackStep3 } = props;
  const [inputValue, setInputValue] = useState("");

  const onChange1 = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setInputValue(e.target.checked);
    console.log(inputValue);
  };
  const handleSubmitNextStep3 = (e) => {
    console.log(inputValue);
    if ((inputValue == "")) {
      alert("Vui lòng trả lời câu hỏi");
    }
    if (inputValue) {
      window.location.href = "/successfull";
    }
  };

  return (
    <>
      <div className='step3-information'>
        <h2 className='step3-text-question'>
          Với hình thức thanh toán hiện tại cần xác minh giao dịch như thế nào?
        </h2>
        <div>
          <Checkbox onChange={onChange1}>
            Chụp ảnh màn hình thanh toán của khách
          </Checkbox>
        </div>
        <div>
          <Checkbox onChange={onChange1}>
            Xác minh tự động trên app thanh toán
          </Checkbox>
        </div>
        <div>
          <Checkbox onChange={onChange1}>
            Xác minh qua thông báo số dư ngay lập tức tới tài khoản ngân hàng
          </Checkbox>
        </div>
        <div>
          <Checkbox onChange={onChange1}>
            Chưa có hình thức xác minh nào
          </Checkbox>
        </div>
      </div>
      <div className='submit'>
        <div onClick={handleSubmitBackStep3} className='back-submit'>
          <button>Back</button>
        </div>
        <div onClick={handleSubmitNextStep3} className='next-submit'>
          <button>Next</button>
        </div>
      </div>
    </>
  );
}

export default Step1;
