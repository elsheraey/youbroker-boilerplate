import { Create, SimpleForm, TextInput } from "react-admin";

const UserCreate = () => {
  return (
    <Create title="Create a User">
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
