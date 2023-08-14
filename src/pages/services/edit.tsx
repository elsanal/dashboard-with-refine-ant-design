import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Edit, useForm} from "@refinedev/antd";
import { Form, Input, Upload } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 

export const ServiceEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form
        {...formProps}
        layout="vertical">
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
          <ReactQuill theme="snow" />
        </Form.Item>
        <Form.Item label="Icon" name={["icon_id"]} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
