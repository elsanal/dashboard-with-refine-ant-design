import React from "react";
import { IResourceComponentsProps, useShow} from "@refinedev/core";
import {
    Show,
    TextField,
    DateField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const AboutShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Id</Title>
            <TextField value={record?.id} />
            <Title level={5}>Name</Title>
            <TextField value={record?.name} />
            <Title level={5}>Phone</Title>
            <TextField value={record?.phone} />
            <Title level={5}>Email</Title>
            <TextField value={record?.email} />
            <Title level={5}>Introduction</Title>
            <TextField value={record?.introduction} />
            <Title level={5}>Created At</Title>
            <DateField value={record?.createdate} />
        </Show>
    );
};
