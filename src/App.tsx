import React from 'react';
import Papa from 'papaparse';
import logo from './logo.svg';
import './App.css';
import { uniques } from './uniques';
import { drops } from './drops';

function App() {
  console.log(uniques);
  const uniquesMap = new Map<string, boolean>();
  for (const unique of uniques) {
    uniquesMap.set(unique.name, true);
  }
  console.log(uniquesMap);
  // Papa.parse('./drops.csv', {
  //   download: true,
  //   complete: function(results) {
  //     console.log('results', results.data);
  //   }
  // });
  const dropCount = new Map<string, number>();
  const misnamedItems = new Map<string, boolean>();
  const rows = drops.split('\n');
  for (const row of rows) {
    const columns = row.split(',');
    const itemName = columns[2];
    if (!uniquesMap.has(itemName) && !itemName.endsWith('Rune') && !itemName.startsWith('Key') && itemName !== 'Item Name') {
      misnamedItems.set(itemName, true);
    }
    dropCount.set(itemName, (dropCount.get(itemName) || 0) + 1);
  }
  console.log(misnamedItems);
  console.log(dropCount)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
