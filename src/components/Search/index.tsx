import React from 'react';
import { SearchContext } from '../../App';
import debaunce from 'lodash.debounce';

import style from './Search.module.scss';

type ContextType = { 
  searchValue: string; 
  setSearchValue: (str: string) => void;
}

const Search: React.FC = () => {
  const { setSearchValue } : ContextType = React.useContext<ContextType>(SearchContext);
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debaunce((str) => {
      setSearchValue(str);
    }, 250),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={style.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={style.input}
        placeholder="Search pizza..."
      />
      <svg
        className={style.icon}
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
      </svg>
      {value && (
        <svg
          onClick={onClickClear}
          className={style.closeIcon}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
        >
          <path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" />
        </svg>
      )}
    </div>
  );
}

export default Search;
