import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Upload } from "antd";
import { v4 as uuidv4 } from "uuid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 

export const ServiceCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps} = useForm();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form
        {...formProps} id={uuidv4()}
        layout="vertical" >
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
         <ReactQuill
        theme="snow" 
        />
        </Form.Item>
        <Form.Item
          label="image"
          name={["icon_id"]}
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
