import {useState} from "react"
import Paragraph from './Paragraph'
import data from './data'
function App() {
  const [number, setNumber] = useState(1)
  const [generatedPar, setGeneratedPar] = useState([])
  


  function handleSubmit(e) {
    e.preventDefault()
    const maxParagraphs = data.length
    let numOfParagraphs = number
    setGeneratedPar([])
    let generatedArrayOfPar = []

    /* This is checking if the new paragraph is already in the generated paragraphs. If it is, it will
    do nothing. If it is not, it will add it to the generated paragraphs. */
      do {
      const randomNum = Math.floor(Math.random() * maxParagraphs )
      const newParagraph = data[randomNum]

      if(generatedArrayOfPar.map(para => para.text.includes(newParagraph.text))) {
        generatedArrayOfPar = [...generatedArrayOfPar, newParagraph]
        numOfParagraphs -= 1 
      }
    } while (numOfParagraphs > 0) 
    setGeneratedPar(generatedArrayOfPar)
    setNumber(1)
  }
  

  return (
    <div className="App">
      <h1>Not so random paragraph generator</h1>
      <form onSubmit={handleSubmit}>
                <label htmlFor="number">Paragraphs:</label>
                <input name="number" min="1" max="10" type="number" value={number} onChange={e => setNumber(e.target.value)} required></input>
                <button type="submit">Generate</button>
      </form>
      {generatedPar.length > 0 && generatedPar.map(paragraph => <Paragraph key={Math.random() * 1000} {...paragraph}/>)}
    </div>
  );
}

export default App;
