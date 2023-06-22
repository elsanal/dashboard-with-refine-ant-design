import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Edit, getValueFromEvent, useForm } from "@refinedev/antd";
import { Form, Input, Upload, Space, Button } from "antd";
import { ImageToBase64 } from "functions/convertToBase64";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export const ProjectEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form
        form={form}
        {...formProps}
        layout="vertical"
        onFinish={async(values)=> ImageToBase64(values, formProps, false)}>
        <Form.Item label="Title" name={["title"]} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true }]} >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item
          label="Github"
          name={["github"]}
          rules={[{ required: false }]} >
          <Input />
        </Form.Item>
        <Form.Item
          label="Technology"
          name={["technology"]}
          rules={[{ required: false }]} >
          <Input />
        </Form.Item>
        <Form.Item
          label="Platform"
          name={["platform"]}
          rules={[{ required: false }]}
        >
          <Input multiple />
        </Form.Item>
        <Form.List name="socials">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space key={field.key} align="baseline">
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.area !== curValues.area ||
                      prevValues.sights !== curValues.sights
                    }>
                    {() => (
                      <Form.Item
                        {...field}
                        label="Name"
                        name={[field.name, "name"]}
                        rules={[{ required: true, message: "Missing name" }]}
                      >
                        <Input />
                      </Form.Item>
                    )}
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
                  icon={<PlusOutlined />}
                >
                  Add sights
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
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
