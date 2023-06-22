import React from "react";
import { IResourceComponentsProps, BaseRecord} from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DateField,
    DeleteButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const ServiceList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="title" title="Title" />
                <Table.Column dataIndex="description" title="Description" />
                <Table.Column
                    dataIndex={["createdate"]}
                    title="Created At"
                    render={(value:any)=> <DateField value={value} />}/>
                <Table.Column
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
