import React, { ReactNode } from 'react';
import {
  Datagrid,
  List,
  Edit,
  SimpleForm,
  TextField,
  TextInput,
  TopToolbar,
  EditButton,
  DeleteButton,
  Filter,
  SearchInput
} from 'react-admin';
import { ImportButton } from 'react-admin-import-csv';
import { CreateButton } from 'ra-ui-materialui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    fontWeight: 'bold',
    backgroundColor: 'gray',
    color: 'white',
    marginRight: '15px'
  },
  createButton: {
    backgroundColor: '#75DBCD',
    color: 'white'
  }
});

const MyCreateButton = (props: any) => {
  const classes = useStyles();
  return <CreateButton className={classes.createButton} {...props} />;
};

const ListActions = (props: any) => {
  const { className, basePath } = props;
  const config = {
    logging: false,
    disableImportNew: false,
    disableImportOverwrite: true
  };
  return (
    <TopToolbar className={className}>
      <div
        style={{ backgroundColor: 'grey', color: 'white', marginRight: '15px' }}
      >
        <ImportButton {...props} {...config} />
      </div>
      <MyCreateButton basePath={basePath} />
    </TopToolbar>
  );
};

const PostFilter = (props: any) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    {/* <ReferenceInput label="Configu" source="name" reference="config" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput> */}
  </Filter>
);

export const UserList = (props: any) => (
  <List filters={<PostFilter />} {...props} actions={<ListActions />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="serialNumber" />
      <TextField source="type" />
      <TextField source="manufacturer" />
      <TextField source="model" />
      <TextField source="expires" />
      <TextField source="location" />
      <TextField source="contact" sortable={false} />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const UserEdit = (props: any) => (
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
