import React, { useState } from "react";

function AddWord() {

  const [japanese, setJapanese] = useState('')
  const [reading, setReading] = useState('')
  const [english, setEnglish] = useState('')
  const [category, setCategory] = useState('')

  function handleClick() {
    console.log({japanese, reading, english, category})
    setJapanese('')
    setReading('')
    setEnglish('')
    setCategory('')
  }
  
  return (
    <div>
      <h2>Add New Word</h2>
      <form>
        <input type="text" placeholder="Japanese word" value={japanese} onChange={(e) => setJapanese(e.target.value)} />
        <input type="text" placeholder="Reading/Hiragana" value={reading} onChange={(e) => setReading(e.target.value)} />
        <input type="text" placeholder="English meaning" value={english} onChange={(e) => setEnglish(e.target.value)} />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <button type="button" onClick={handleClick}>Add Word</button>
      </form>
    </div>
  );
}

export default AddWord;