import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contactsSlice';
import { FilterStyle, FilterText, Input } from './filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterStyle>
      <FilterText>Find contact by name</FilterText>
      <Input
        name="filter"
        // value={filter}
        type="text"
        placeholder="Search contacs"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={evt => dispatch(addFilter(evt.currentTarget.value))}
      />
    </FilterStyle>
  );
};
