import React, { useState } from "react";
import { Form, Input, Select, Space } from "antd";
import "./Step1.scss";

const options = [
  {
    value: "Chủ tịch/Phó Chủ tịch",
    label: "Chủ tịch/Phó Chủ tịch",
  },
  {
    value: "Tổng giám đốc/Giám đốc",
    label: "Tổng giám đốc/Giám đốc",
  },
  {
    value: "Ban lãnh đạo(chức vụ khác)",
    label: "Ban lãnh đạo(chức vụ khác)",
  },
  {
    value: "Kế toán viên",
    label: "Kế toán viên",
  },
  {
    value: "Nhân viên (khác)",
    label: "Nhân viên (khác)",
  },
  {
    value: "Kế toán thuê ngoài",
    label: "Kế toán thuê ngoài",
  },
];
const age = [
  {
    value: "Dưới 26 tuổi",
    label: "Dưới 26 tuổi",
  },
  {
    value: "Từ 26 đến 30 tuổi",
    label: "Từ 26 đến 30 tuổi",
  },
  {
    value: "Từ 41 đến 50 tuổi",
    label: "Từ 41 đến 50 tuổi",
  },
  {
    value: "Từ 50 tuổi trở lên",
    label: "Từ 50 tuổi trở lên",
  },
];
function Step1(props) {
  let { handleChangeAge, handleChangecv, onFinish, onFinishFailed } = props;

  return (
    <>
      <div className='wrapper-bottom-step1'>
        <div className='child-botom-step1'>
          <h2>Thông tin doanh nghiệp</h2>
          <p className='child-step1'>Mã số thuế: 0110010000</p>
          <p className='child-step1'>
            Tên công ty: <span>Moonshine</span>
          </p>
          <p className='child-step1'>Địa chỉ: 116 Trần Duy Hưng</p>
          <p className='child-step1'>Người đại diện: Trang</p>
          <Form
            layout='vertical'
            name='basic'
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label='Tên người liên hệ để phối hợp(*)'
              name='username'
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                name='username'
                placeholder='Vui lòng nhập tên người liên hệ'
              />
            </Form.Item>

            <Space direction='vertical' size='middle'>
              <Space.Compact>
                <Select
                  onChange={handleChangecv}
                  name='a'
                  defaultValue='Vui lòng chọn chức vụ (*)'
                  options={options}
                />
              </Space.Compact>
            </Space>

            <Form.Item
              label='Email(*)'
              name='email'
              rules={[
                {
                  required: true,
                  message: "Please input email",
                },
              ]}
            >
              <Input placeholder='Vui lòng nhập Email' />
            </Form.Item>

            <Form.Item
              label='Số điện thoại di động để liênhệ(*)'
              name='phone'
              rules={[
                {
                  required: true,
                  message: "Please input phone",
                },
              ]}
            >
              <Input placeholder='Vui lòng nhập số điện thoại' />
            </Form.Item>

            <Space direction='vertical' size='middle'>
              <Space.Compact>
                <Select
                  onChange={handleChangeAge}
                  defaultValue='Vui lòng chọn độ tuổi (*)'
                  options={age}
                />
              </Space.Compact>
            </Space>

            <Form.Item label='Số CMT/CCCD người liên hệ' name='cccd'>
              <Input placeholder='Vui lòng nhập số CMT/CCCD người liên hệ' />
            </Form.Item>

            <Form.Item label='Số điện thoại cơ quan (nếu có)' name='phonecq'>
              <Input placeholder='Vui lòng nhập số điện thoại cơ quan' />
            </Form.Item>
            <p>Ghi chú: Những nội dung có dấu (*) là bắt buộc</p>
            <div className='step1-btn'>
              <button className='btn-submit'>Next</button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Step1;
