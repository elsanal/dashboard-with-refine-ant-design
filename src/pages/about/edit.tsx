import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Edit, getValueFromEvent, useForm } from "@refinedev/antd";
import { Form, Input, Upload, InputNumber, Space, Button } from "antd";
import { ImageToBase64 } from "functions/convertToBase64";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export const AboutEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm();

  return (
    <Edit saveButtonProps={saveButtonProps}>
            <Form
        form={form}
        {...formProps}
        layout="vertical"
        onFinish={async(values)=> ImageToBase64(values, formProps, false)}>
        <Form.Item label="Name" name={["name"]} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Introduction"
          name="introduction"
          rules={[{ required: true }]} >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item
          label="Email"
          name={["email"]}
          rules={[{ required: false }]} >
          <Input type="email"/>
        </Form.Item>
        <Form.Item
          label="Phone"
          name={["phone"]}
          rules={[{ required: false }]} >
          <InputNumber style={{minWidth:'300px'}} />
        </Form.Item>
        <Form.List name="network">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space key={field.key} align="baseline">
                  <Form.Item
                        {...field}
                        label="Name"
                        name={[field.name, "name"]}
                        rules={[{ required: true, message: "Missing name" }]}
                      >
                        <Input />
                   </Form.Item>

                  <Form.Item
                    {...field}
                    label="Link"
                    name={[field.name, "link"]}
                    rules={[{ required: true, message: "Missing link" }]}
                  >
                    <Input />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />} >
                  Add social network
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item label="Profile Photo">
          <Form.Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: true
              }
            ]} >
            <Upload.Dragger
              listType="picture"
              multiple
              beforeUpload={() => false} >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Edit>
  );
};
