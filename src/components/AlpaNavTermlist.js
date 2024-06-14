import React, { useEffect, useState } from 'react';

const AlpaNavTermlist = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [terms, setTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [activeLetters, setActiveLetters] = useState(new Set());

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setTerms(data.termList);
        setFilteredTerms(data.termList);
        const letters = new Set(data.termList.map(term => term.title.charAt(0).toUpperCase()));
        setActiveLetters(letters);
      });
  }, []);

  useEffect(() => {
    if (selectedLetter) {
      setFilteredTerms(terms.filter(term => term.title.startsWith(selectedLetter)));
    } else {
      setFilteredTerms(terms);
    }
  }, [selectedLetter, terms]);

  const filterData = (letter) => {
    setSelectedLetter(letter);
  }

  const groupTermsByAlphabet = (terms) => {
    return terms.reduce((groups, term) => {
      const letter = term.title.charAt(0).toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(term);
      return groups;
    }, {});
  };

  const groupedTerms = groupTermsByAlphabet(filteredTerms);

  return (
    <>
      <main>
        <section className="container">
          <div className='alphaNavHead'><h3>Treatments, Services and Specialities</h3></div>
          <div role="navigation" aria-label="Alphabet Navigation" className='glossary'>
            {alphabet.map(letter => (
              <button 
                key={letter} 
                onClick={() => filterData(letter)} 
                aria-label={`Filter by ${letter}`}
                disabled={!activeLetters.has(letter)}
                className='glossary-item'
              >
                {letter}
              </button>
            ))}
            <button onClick={() => filterData('')} aria-label="Show all terms" className='glossary-item'>
              #
            </button>
          </div>
        </section>
        <section  className='termList'>
          <div className="container">
            {Object.keys(groupedTerms).map(letter => (
              <div key={letter}>
                <h2>{letter}</h2>
                {groupedTerms[letter].map(term => (
                  <div key={term.title} className="term-item">
                    <a href="#">{term.title}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default AlpaNavTermlist;
