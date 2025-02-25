import './App.css';

import {useRef} from 'react';

export default function App() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <button onClick={handleClick}>Scroll to element</button>

      <div style={{height: '155rem'}} />

      <div ref={ref} style={{backgroundColor: 'lime'}}>
        bobbyhadz.com
      </div>

      <div style={{height: '155rem'}} />
    </div>
  );
}
