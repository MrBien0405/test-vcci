import React from "react";
import { Checkbox } from "antd";
import "./Step2.scss";

function Step1(props) {
  let { onChange, handleSubmitBack, handleSubmitNext } = props;
  return (
    <>
      <div className='step2-information'>
        <h2 className='step2-text-question'>
          Cách thức bạn đối soát doanh thu hiện tại?
        </h2>
        <Checkbox onChange={onChange}>
          Đối soát thủ công bằng cách kiểm tra các giao dịch
        </Checkbox><br />
        <Checkbox onChange={onChange}>Đối soát tự động</Checkbox>
      </div>
      <div className='submit'>
        <div onClick={handleSubmitBack} className='back-submit'>
          <button>Back</button>
        </div>
        <div onClick={handleSubmitNext} className='next-submit'>
          <button>Next</button>
        </div>
      </div>
    </>
  );
}

export default Step1;
