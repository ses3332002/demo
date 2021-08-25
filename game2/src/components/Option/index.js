import React from 'react';
import Select from 'react-select';

// import styles from './style';

export default function Option({ moveIsDisabled }) {
  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      //   borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 6,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 40,
    }),
    container: (provided, state) => ({
      ...provided,
      //   borderBottom: '1px dotted pink',
      //   color: state.isSelected ? 'red' : 'blue',
      padding: 6,
      width: 30,
      display: 'inline-block',
    }),
    IndicatorsContainer: (provided, state) => ({
      ...provided,
      //   borderBottom: '1px dotted pink',
      //   color: state.isSelected ? 'red' : 'blue',
      //   padding: 6,
      //   width: 30,
      display: 'none',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };
  return <Select styles={customStyles} options={options} />;
  //   return (
  //     <select disabled={moveIsDisabled}>
  //       <option value="1" data-color="red"></option>
  //       <option value="2"></option>
  //       <option value="3"></option>
  //     </select>
  //   );
}
