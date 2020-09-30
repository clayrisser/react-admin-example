import React, { FC, ReactNode, ReactElement, ElementType } from 'react';
import {
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Filter,
  TopToolbar,
  List,
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

export interface FilterProps {
  children?: ReactNode;
  context?: 'form' | 'button';
  variant?: string;
}

export interface ListProps {
  children?: ReactElement;
  actions?: ReactElement | false;
  aside?: ReactElement;
  bulkActionButtons?: ReactElement | false;
  classes?: any;
  className?: string;
  component?: ElementType;
  empty?: ReactElement | false;
  filter?: any;
  filterDefaultValues?: any;
  filters?: ReactElement;
  pagination?: ReactElement | false;
  perPage?: number;

  title?: string | ReactElement;
}

const ConfigFilter = (props: FilterProps) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    {/* <ReferenceInput label="Configu" source="name" reference="config" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput> */}
  </Filter>
);
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

const ConfigList: FC<ListProps> = (props) => {
  return (
    <List filters={<ConfigFilter />} {...props} actions={<ListActions />}>
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
};

export default ConfigList;
