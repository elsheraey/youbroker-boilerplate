import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = () => {
  return (
    <Edit title="Edit User">
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
