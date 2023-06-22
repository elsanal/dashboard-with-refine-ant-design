import React from "react";
import { IResourceComponentsProps, useShow, useOne } from "@refinedev/core";
import {
    Show,
    NumberField,
    TagField,
    TextField,
    MarkdownField,
    DateField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const ProjectShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Id</Title>
            <TextField value={record?.id} />
            <Title level={5}>Title</Title>
            <TextField value={record?.title} />
            <Title level={5}>Description</Title>
            <TextField value={record?.description} />
            <Title level={5}>Created At</Title>
            <DateField value={record?.createdate} />
        </Show>
    );
};
