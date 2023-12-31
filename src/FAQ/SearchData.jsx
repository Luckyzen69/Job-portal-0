import { useState } from 'react';

export default function SearchData({ datas }) {
  const [searchText, setSearchText] = useState('');
  const foundDatas = filterDatas(datas, searchText);
  return (
    <>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} /> 
      <DataList
        datas={foundDatas}
        emptyHeading={`No matches for “${searchText}”`} />
    </>
  );
}