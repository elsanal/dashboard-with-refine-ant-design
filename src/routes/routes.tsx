import { ErrorComponent, ThemedLayoutV2 } from "@refinedev/antd"
import { ILogData, IResourceComponentsProps } from "@refinedev/core"
import  {NavigateToResource,} from "@refinedev/react-router-v6";
import React from "react";
import { ReactFragment } from "react";
import { Outlet, Route } from "react-router-dom"

interface Component{
    list: JSX.Element;
    show: JSX.Element;
    edit: JSX.Element;
    create: JSX.Element;
    resource: string | undefined;
}

export const ComponentRoute = ({list, show, edit, create, resource}:Component)=> {
    
    return (<div>
        <Route index element={list} />
        <Route path="show/:id" element={show}/>
        <Route path="edit/:id" element={edit}/>
        <Route path="create"element={create}/>
    </div>)
}