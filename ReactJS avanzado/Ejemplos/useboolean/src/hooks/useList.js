const { useState } = require("react");

const useList = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  // Push a new value to list
  const push = (element) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  // Remove value from list
  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  // List is empty ? true : false
  const isEmpty = () => value.length === 0;

  return { value, setValue, push, remove, isEmpty };
};

export default useList;