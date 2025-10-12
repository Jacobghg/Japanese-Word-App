import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';


function AddWord() {

  const [japanese, setJapanese] = useState('')
  const [reading, setReading] = useState('')
  const [english, setEnglish] = useState('')
  const [category, setCategory] = useState('')
  const [words, setWords] = useState([]);

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
  fetchWords();
}

const fetchWords = async () => {
  const querySnapshot = await getDocs(collection(db, "words"));
  const wordsList = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  setWords(wordsList);
};

useEffect(() => {
  fetchWords();
}, []);
  
  

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
      <div style={{ marginTop: '40px' }}>
  <h3>Your Words</h3>
  {words.map(word => (
    <div key={word.id} style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px' }}>
      <strong>{word.japanese}</strong> ({word.reading}) - {word.english}
      <br />
      <small>Category: {word.category}</small>
    </div>
  ))}
</div>
    </div>
  );
}

export default AddWord;