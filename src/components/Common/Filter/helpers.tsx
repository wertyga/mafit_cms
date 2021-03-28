import React from 'react';
import { SearchField } from 'components/Common/SearchField/SearchField';

type Props = {
	name: string;
	currentFilter: Partial<{
		search: string;
		by: string;
	}>;
};

export const getColumnSearchProps = ({ name, currentFilter = {} }: Props) => ({
  filterDropdown: (props) => <SearchField name={name} {...props} />,
  filteredValue: name === currentFilter.by ? currentFilter.search : '',
});
