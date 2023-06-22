import React from "react";
import { IResourceComponentsProps, file2Base64 } from "@refinedev/core";
import { Create, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker, Upload } from "antd";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { ImageToBase64 } from "functions/convertToBase64";

export const ServiceCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, queryResult } = useForm();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form
        {...formProps} id={uuidv4()}
        layout="vertical"
        onFinish={async(values)=> ImageToBase64(values, formProps, true)}
      >
        <Form.Item label="Title" name={["title"]} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item
          label="Icon"
          name={["icon_id"]}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Image">
          <Form.Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: true
              }
            ]}
          >
            <Upload.Dragger
              listType="picture"
              multiple
              beforeUpload={()=> false}
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Create>
  );
};
