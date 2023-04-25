import { React } from 'react';
import style from '../Filter/Filter.module.css';
import { useDispatch } from 'react-redux';

import { setContactsFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = e => {
    dispatch(setContactsFilter(e.target.value));
  };
  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        Find contacts by name:
        <input
          className={style.input}
          onChange={filterHandler}
          type="text"
        ></input>
      </label>
    </div>
  );
};

export default Filter;
