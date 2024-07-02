import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserAccountList } from "./userAccount/UserAccountList";
import { UserAccountCreate } from "./userAccount/UserAccountCreate";
import { UserAccountEdit } from "./userAccount/UserAccountEdit";
import { UserAccountShow } from "./userAccount/UserAccountShow";
import { ControllerInputList } from "./controllerInput/ControllerInputList";
import { ControllerInputCreate } from "./controllerInput/ControllerInputCreate";
import { ControllerInputEdit } from "./controllerInput/ControllerInputEdit";
import { ControllerInputShow } from "./controllerInput/ControllerInputShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PocketPartyBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserAccount"
          list={UserAccountList}
          edit={UserAccountEdit}
          create={UserAccountCreate}
          show={UserAccountShow}
        />
        <Resource
          name="ControllerInput"
          list={ControllerInputList}
          edit={ControllerInputEdit}
          create={ControllerInputCreate}
          show={ControllerInputShow}
        />
      </Admin>
    </div>
  );
};

export default App;
