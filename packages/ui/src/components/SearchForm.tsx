import { StyledLabel } from './styled/StyledLabel';
import { StyledInput } from './styled/StyledInput';
import { FC } from 'react';

interface SearchFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const SearchForm: FC<SearchFormProps> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <StyledLabel>
        <StyledInput type="search" placeholder="Search..." name="searchTerm" />
      </StyledLabel>
    </form>
  );
};

export default SearchForm;
