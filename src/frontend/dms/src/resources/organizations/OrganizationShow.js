import React from 'react';
import { Show, TextField, UrlField } from 'react-admin';
import ColumnShowLayout from '../../components/ColumnShowLayout';
import Column from '../../components/Column';
import Hero from '../../components/Hero';
import MarkDownField from '../../components/MarkdownField';
import UriArrayField from '../../components/UriArrayField';
import UserIcon from '../../components/UserIcon';
import GridList from '../../components/GridList';

const OrganizationTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

const OrganizationShow = props => (
  <Show {...props}>
    <ColumnShowLayout>
      <Column xs={12} sm={9}>
        <Hero title={<OrganizationTitle />}>
          <TextField label="Courte description" source="pair:comment" />
          <UrlField label="Site web" source="pair:homePage" />
        </Hero>
        <MarkDownField source="pair:description" addLabel />
      </Column>
      <Column xs={12} sm={3} showLabel>
        <UriArrayField label="Membres" reference="User" source="pair:hasMember" referenceBasePath="/User">
          <GridList xs={6} linkType="show">
            <UserIcon />
          </GridList>
        </UriArrayField>
      </Column>
    </ColumnShowLayout>
  </Show>
);

export default OrganizationShow;
