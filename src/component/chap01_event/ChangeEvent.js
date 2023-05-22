import React from 'react';

const changeEvent = e => {

  const changeValue = e => {
    console.log(`value : ${e.target.value}`);
  };

  return (
    <>
      <input type='text' onChange={changeValue} />
      <select>
        <option value="pizza">피자</option>
        <option value="chicken">치킨</option>
        <option value="pasta">파스타</option>
      </select>
    </>
  );
};

export default changeEvent