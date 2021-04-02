import { useState } from 'react';

const useConstructor = (callback: () => void) => {
  const [called, setCalled] = useState(false);

  if (!called) {
	  callback();
	  setCalled(true);
  }
};

export default useConstructor;
