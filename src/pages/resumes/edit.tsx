import React from "react";
import { IResourceComponentsProps, file2Base64 } from "@refinedev/core";
import { Create, Edit, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker, Upload, Space, Button } from "antd";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { ImageToBase64 } from "functions/convertToBase64";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

export const ResumeEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, queryResult } = useForm();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form
        {...formProps} id={uuidv4()}
        layout="vertical"
        onFinish={async(values)=> ImageToBase64(values, formProps, true)} >
        <Form.List name="languages">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space key={field.key} align="baseline">
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.area !== curValues.area ||
                      prevValues.sights !== curValues.sights } >
                    {() => (
                      <Form.Item
                        {...field}
                        label="Name"
                        name={[field.name, "name"]}
                        rules={[{ required: true, message: "Missing name" }]} >
                        <Input />
                      </Form.Item>
                    )}
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label="Level"
                    name={[field.name, "level"]}
                    rules={[{ required: true, message: "Missing level" }]} >
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
                  Add language
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.List name="skills">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space key={field.key} align="baseline">
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.area !== curValues.area ||
                      prevValues.sights !== curValues.sights } >
                    {() => (
                      <Form.Item
                        {...field}
                        label="Name"
                        name={[field.name, "name"]}
                        rules={[{ required: true, message: "Missing name" }]} >
                        <Input />
                      </Form.Item>
                    )}
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label="Level"
                    name={[field.name, "level"]}
                    rules={[{ required: true, message: "Missing link" }]} >
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
                  Add skills
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.List name="experiences">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space key={field.key} align="baseline">
                  <Form.Item
                    {...field}
                    label="Experience"
                    name={[field.name, "experience"]}
                    rules={[{ required: true, message: "Missing experience" }]} >
                    <Input.TextArea rows={5} />
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
                  Add experience
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item label="File">
          <Form.Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[ { required: true } ]} >
            <Upload.Dragger
              beforeUpload={() => false} >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Edit>
  );
};
