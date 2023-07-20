import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import UserList from "./UserList";

const exportedObject = {
  list: UserList,
  edit: UserEdit,
  create: UserCreate,
};

export default exportedObject;
