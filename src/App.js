import React from 'react';

import PLHistory from './PLHistory';
import Card from './Card';
import './App.css';

function App() {
  const [findLang, setFindLang] = React.useState('');

  function handleFindLang(e){
    setFindLang(e.target.value)
  }
  const foundLang = PLHistory.filter(lang =>{
    return lang.name.toLowerCase().includes(findLang.toLowerCase()) || 
            lang.creator.toLowerCase().includes(findLang.toLowerCase()) || 
            lang.place.toLowerCase().includes(findLang.toLowerCase()) ||
            lang.year.toString().includes(findLang.toLowerCase()) ||
            lang.features.some(feature =>
              feature.toLowerCase().includes(findLang.toLowerCase())
            )
  })
  const showLang = foundLang.map(lang =>{
    return (
      <Card
       {...lang}
      />
    );
  })
  const history = PLHistory.map((info) => {
    return (
      <Card 
       {...info}
      />
    );
  });

  return (
    <div className="App">
      <header>
        <h1 className='App--title'>Programming Languages</h1>
      </header>
      <div className='App--search-container'>
        <input className='App--search' 
          placeholder='find a language' 
          value={findLang} 
          type='text' 
          onChange={handleFindLang}
        />
      </div>
      <main className='cards'>
        {findLang === "" ? history : showLang}
      </main>
    </div>
  );
}


export default App;
