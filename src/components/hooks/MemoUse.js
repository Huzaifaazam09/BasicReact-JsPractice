// import React, { useMemo, useState } from 'react';

// function MemoUse() {
//   const [count, setCount] = useState(0);

//   // Memoized value calculated using useMemo
//   const squaredValue = useMemo(() => {
//     console.log('Calculating squared value...');
//     return count * count;
//   }, [count]); // Re-run the function if count changes

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Squared Value: {squaredValue}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//     </div>
//   );
// }

// export default MemoUse

import React, { useCallback, useState } from 'react';

function MemoUse() {
  const [count, setCount] = useState(0);

  // Increment function wrapped with useCallback to memoize it
  const increment = useCallback(() => {
    console.log("hellooo")
    setCount(count + 1);
  }, [count]); // Dependency array ensures the function is re-created only if count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
}

export default MemoUse