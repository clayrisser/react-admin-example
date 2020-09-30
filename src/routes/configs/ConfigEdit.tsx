import * as React from 'react';
import { FC } from 'react';
import { Edit, TextInput, SimpleForm } from 'react-admin';

export interface EditProps {}

const ConfigEdit: FC<EditProps> = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="serialNumber" />
        <TextInput source="type" />
        <TextInput source="manufacturer" />
        <TextInput source="model" />
        <TextInput source="expires" />
        <TextInput source="loacation" />
        <TextInput source="contact" />
      </SimpleForm>
    </Edit>
  );
};

export default ConfigEdit;
