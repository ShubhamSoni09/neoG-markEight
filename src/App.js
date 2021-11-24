import "./styles.css";
import { useState } from "react";

var DictionaryOfFruits = {

    "🍎": "Apple",
    "🍈": "Melon",
    "🍐": "Pear",
    "🍒": "Cherry",
    "🍉": "Watermelon",
    "🍑": "Peach",
    "🍍": "Pineapple",
    "🥝": "Kiwi",
    "🍏": "Green Apple",
    "🥭": "Mango",
    "🍇": "Grapes",
    "🍌": "Banana",
    "🍓": "Strawberry",
    "🍇": "Grapes",
};

var KeyofFruit =  Object.keys(DictionaryOfFruits);

export default function App(){
    var [input,setInput] = useState("");
    var showOutput;

    function inputChangeHandler(event){
        input = event.target.value;
        showOutput = DictionaryOfFruits[input];

        if(!input in DictionaryOfFruits){
            showOutput = "There is no such fruit!";
        }

        setInput(showOutput);
    }

    function fruitClickHandler(fruit){
        showOutput = DictionaryOfFruits[fruit];
        setInput(showOutput);
    }

    return (
        <div className="TheApp">
            <header>
                <h1>Know your Fruit!</h1>
                <p className="mainclass">
                    <a
                        href="https://github.com/ShubhamSoni09/neoG-markEight"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                    Github Repo
                </a>
                </p>
            </header>

            <main>
                <input
                    onChange={inputChangeHandler}
                    placeholder="Enter the fruit emoji for which you want to know the name"
                    ></input>

                    <div className="output">{input}</div>

                    <div>Fruits we know: </div>

                    <div className="fruitDiv">
                        {
                            KeyofFruit.map((fruit)=>{
                                return (
                                    <span onClick={() => fruitClickHandler(fruit)}>{fruit}</span>
                                );
                            })}
                        </div>
                    </main>

        <footer>
        <a
          href="https://shubham-soni-portfolio.netlify.app"
          target="_blank"
          rel="noreferrer noopener"
        >
          Shubham Soni
        </a>
      </footer>
    </div>
        
    );
}
