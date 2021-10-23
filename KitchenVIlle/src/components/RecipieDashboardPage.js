import React from 'react';
import RecipieList from './RecipieList';
import RecipieListFilters from './RecipieListFilters';

const RecipieDashboardPage = () => (
  <div>
    <RecipieListFilters />
    <RecipieList />
  </div>
);

export default RecipieDashboardPage;
