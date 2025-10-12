import React, { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

function AddWord() {

  const [japanese, setJapanese] = useState('')
  const [reading, setReading] = useState('')
  const [english, setEnglish] = useState('')
  const [category, setCategory] = useState('')

  async function handleClick() {
  await addDoc(collection(db, "words"), {
    japanese: japanese,
    reading: reading,
    english: english,
    category: category,
    status: "learning",
    timesCorrect: 0,
    timesIncorrect: 0,
    createdAt: new Date()
  });
  
  setJapanese('');
  setReading('');
  setEnglish('');
  setCategory('');
  
  alert('Word added to Firebase!');
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