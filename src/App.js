import React, { useState } from 'react';
import Dropdown from './Dropdown';
import options from './options';

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      <Dropdown
        selected={selected}
        onSelectChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
