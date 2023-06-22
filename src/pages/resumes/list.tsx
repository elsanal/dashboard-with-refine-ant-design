import React from "react";
import { IResourceComponentsProps, BaseRecord} from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  ShowButton,
  DateField,
  DeleteButton
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const ResumeList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable({
    syncWithLocation: true
  });


  const skills =
    tableProps?.dataSource?.map((item) => item.skills) ?? [];
    const languages =
    tableProps?.dataSource?.map((item) => item.languages) ?? [];
    const experiences =
    tableProps?.dataSource?.map((item) => item.experiences) ?? [];
  return (
    <List>
      <Table dataSource={skills[0]}>
        <Table.Column dataIndex={["name"]} title="Skills" />
        <Table.Column dataIndex={["level"]} title="Level" />
      </Table>
      <Table dataSource={languages[0]}>
        <Table.Column dataIndex={["name"]} title="Languages" />
        <Table.Column dataIndex={["level"]} title="Level" />
      </Table>
      <Table dataSource={experiences[0]}>
        <Table.Column dataIndex={["experience"]} title="Experience" />
      </Table>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex={["createdate"]}
          title="Created At"
          render={(value:any)=><DateField value={value}/>}
        />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_,record:BaseRecord)=> (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
