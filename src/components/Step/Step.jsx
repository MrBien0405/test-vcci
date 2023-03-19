import React, { useState } from "react";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import "./Step.scss";
function Step() {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [color, setColor] = useState(true);
  const [cv, setCv] = useState("");
  const [age1, setAge1] = useState("");
  const [styleBackgroundB1, setStyleBackgroundB1] = useState(false);
  const [styleColorB1, setStyleColorB1] = useState(false);
  const [styleBackgroundB2, setStyleBackgroundB2] = useState(false);
  const [styleColorB2, setStyleColorB2] = useState(false);
  const [styleBackgroundB3, setStyleBackgroundB3] = useState(false);
  const [styleColorB3, setStyleColorB3] = useState(false);

  const handleChangecv = (cv) => {
    setCv(cv);
  };
  const handleChangeAge = (age1) => {
    setAge1(age1);
  };

  const onFinish = (values) => {
    const data = { ...values, age1, cv };
    if (data) {
      setStep2(!step2);
      setStep1(!step1);
      setStyleBackgroundB1(!styleBackgroundB1);
      setStyleColorB1(!styleColorB1);
      alert(
        "Đề nghị các Anh/Chị khi thực hiện khảo sát phải xin ý kiến chủ Doanh nghiệp vì các câu hỏi rất quan trọng ảnh hưởng đến sản xuất kinh doanh và tổ Chuyển đổi số VCCI lấy ý kiến của Chủ Doanh nghiệp để phản ánh kiến nghị đến chính phủ."
      );
    }
  };
  const onFinishFailed = (errorInfo) => {
    //   console.log("Failed:", errorInfo);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleSubmitBack = () => {
    setStep2(!step2);
    setStep1(!step1);
    setStyleBackgroundB2(styleBackgroundB2);
    setStyleColorB2(styleColorB2);
  };
  const handleSubmitNext = () => {
    setStep2(!step2);
    setStep3(!step3);
    setStyleBackgroundB2(!styleBackgroundB2);
    setStyleColorB2(!styleColorB2);
    // setStyleBackgroundB1(!styleBackgroundB1);
    // setStyleColorB1(!styleColorB1);
  };

  const handleSubmitBackStep3 = () => {
    setStep2(!step2);
    setStep1(step1);
    setStep3(!step3);
  };

  return (
    <>
      <div className='container-step1'>
        <div className='wrapper-step1'>
          <div className='wrapper-top-step1'>
            <div className='child-step1'>
              <div
                className='box-step1'
                style={{
                  backgroundColor: styleBackgroundB1 ? "#2f669e" : "#fff",
                }}
              >
                <i
                  className='fa-solid fa-droplet'
                  style={{
                    color: styleColorB1 ? "#fff" : "2f669e",
                  }}
                ></i>
              </div>

              <div className='text-step1'>Bước 1</div>
            </div>

            <div className='child-step1'>
              <div
                className='box-step1'
                style={{
                  backgroundColor: styleBackgroundB2 ? "#2f669e" : "#fff",
                }}
              >
                <i
                  className='fa-solid fa-droplet'
                  style={{
                    color: styleColorB2 ? "#fff" : "2f669e",
                  }}
                ></i>
              </div>
              <div className='text-step1'>Bước 2</div>
            </div>

            <div className='child-step1'>
              <div
                className='box-step1'
                style={{
                  backgroundColor: styleBackgroundB3 ? "#2f669e" : "#fff",
                }}
              >
                <i
                  className='fa-solid fa-droplet'
                  style={{
                    color: styleColorB3 ? "#fff" : "2f669e",
                  }}
                ></i>
              </div>
              <div className='text-step1'>Bước 3</div>
            </div>
          </div>
          {step1 && (
            <Step1
              onFinishFailed={onFinishFailed}
              onFinish={onFinish}
              handleChangecv={handleChangecv}
              handleChangeAge={handleChangeAge}
            />
          )}
          {step2 && (
            <Step2
              style={{ setStyleBackgroundB2, setStyleColorB2 }}
              onChange={onChange}
              handleSubmitBack={handleSubmitBack}
              handleSubmitNext={handleSubmitNext}
            />
          )}
          {step3 && (
            <Step3
              //   onChange={onChange1}
              handleSubmitBackStep3={handleSubmitBackStep3}
              //   handleSubmitNextStep3={handleSubmitNextStep3}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Step;
