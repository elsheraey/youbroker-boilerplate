import "../styles/App.css";

import { Admin, Resource } from "react-admin";
import fakeDataProvider from "ra-data-fakerest";
import UserList from "./admin/users/UserList";
import UserCreate from "./admin/users/UserCreate";
import UserEdit from "./admin/users/UserEdit";

const dataProvider = fakeDataProvider({
  users: [
    { id: 0, name: "Azouz", email: "mahmoud@youbroker.com" },
    { id: 1, name: "Mourad", email: "mourad@youbroker.com" },
  ],
});

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
  </Admin>
);

export default App;
