import { Refine } from "@refinedev/core";
import {
  ThemedLayoutV2,
  notificationProvider,
  ErrorComponent,
  RefineThemes
} from "@refinedev/antd";
import routerBindings, {
  NavigateToResource,
  UnsavedChangesNotifier
} from "@refinedev/react-router-v6";
import "@refinedev/antd/dist/reset.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ServiceCreate } from "pages/services/create";
import { ServiceList } from "pages/services/list";
import resources from "constant.ts/ressources";
import { ServiceEdit } from "pages/services/edit";
import { ServiceShow } from "pages/services/show";
import { ProjectCreate } from "pages/projects/create";
import { ProjectEdit } from "pages/projects/edit";
import { ProjectList } from "pages/projects/list";
import { ProjectShow } from "pages/projects/show";
import { AboutCreate } from "pages/about/create";
import { AboutList } from "pages/about/list";
import { AboutEdit } from "pages/about/edit";
import { AboutShow } from "pages/about/show";
import { ResumeCreate } from "pages/resumes/create";
import { ResumeEdit } from "pages/resumes/edit";
import { ResumeList } from "pages/resumes/list";
import { ResumeShow } from "pages/resumes/show";
import { dataProvider } from "data/dataProvider";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ConfigProvider theme={RefineThemes.Blue}>
        <Refine
          routerProvider={routerBindings}
          dataProvider={dataProvider(`${process.env.REACT_APP_API_URL}`)}
          notificationProvider={notificationProvider}
          resources={resources}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true
          }}
        >
          <Routes>
            <Route
              element={
                <ThemedLayoutV2>
                  {" "}
                  <Outlet />{" "}
                </ThemedLayoutV2>
              }
            >
              <Route
                index
                element={<NavigateToResource resource="project" />}
              />
              <Route path="project">
                <Route index element={<ProjectList />} />
                <Route path="show/:id" element={<ProjectShow />} />
                <Route path="edit/:id" element={<ProjectEdit />} />
                <Route path="create" element={<ProjectCreate />} />
              </Route>
              <Route path="*" element={<ErrorComponent />} />
            </Route>
            <Route
              element={
                <ThemedLayoutV2>
                  {" "}
                  <Outlet />{" "}
                </ThemedLayoutV2>
              }
            >
              <Route
                index
                element={<NavigateToResource resource="service" />}
              />
              <Route path="service">
                <Route index element={<ServiceList />} />
                <Route path="show/:id" element={<ServiceShow />} />
                <Route path="edit/:id" element={<ServiceEdit />} />
                <Route path="create" element={<ServiceCreate />} />
              </Route>
              <Route path="*" element={<ErrorComponent />} />
            </Route>
            <Route
              element={
                <ThemedLayoutV2>
                  {" "}
                  <Outlet />{" "}
                </ThemedLayoutV2>
              }
            >
              <Route index element={<NavigateToResource resource="resume" />} />
              <Route path="resume">
                <Route index element={<ResumeList />} />
                <Route path="show/:id" element={<ResumeShow />} />
                <Route path="edit/:id" element={<ResumeEdit />} />
                <Route path="create" element={<ResumeCreate />} />
              </Route>
              <Route path="*" element={<ErrorComponent />} />
            </Route>
            <Route
              element={
                <ThemedLayoutV2>
                  {" "}
                  <Outlet />{" "}
                </ThemedLayoutV2>
              }
            >
              <Route index element={<NavigateToResource resource="about" />} />
              <Route path="about">
                <Route index element={<AboutList />} />
                <Route path="show/:id" element={<AboutShow />} />
                <Route path="edit/:id" element={<AboutEdit />} />
                <Route path="create" element={<AboutCreate />} />
              </Route>
              <Route path="*" element={<ErrorComponent />} />
            </Route>
          </Routes>
          <UnsavedChangesNotifier />
        </Refine>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
