import React, { useState } from 'react'
import CheckBox from './CheckBox';
import './Generator.css'

const Generator = () => {
    const [passwordConfig, setPasswordConfig] = useState({
        length: 5,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false
    })

    const [handelText, setHandelText] = useState('');
    const [copied, setCopied] = useState(false);


    const handleChangeUppercase = () => {
        setPasswordConfig({
            ...passwordConfig,
            uppercase: !passwordConfig.uppercase
        })
    }

    const handleChangeLowercase = () => {
        setPasswordConfig({
            ...passwordConfig,
            lowercase: !passwordConfig.lowercase
        })
    }

    const handleChangeNumbers = () => {
        setPasswordConfig({
            ...passwordConfig,
            numbers: !passwordConfig.numbers,
        });
    };

    const handleChangeSymbols = () => {
        setPasswordConfig({
            ...passwordConfig,
            symbols: !passwordConfig.symbols,
        });
    };

    const setPasswordLength = (val) => {
        setPasswordConfig({
            ...passwordConfig,
            length: val,
        });
    };

    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97)
    const lowerCaseLetters = characterCodes.map((code) => String.fromCharCode(code))
    const upperCaseLetters = lowerCaseLetters.map((letter) => letter.toUpperCase())

    function generatePassword() {
        const { length, uppercase, lowercase, numbers, symbols } = passwordConfig;
        generateTheWord(length, uppercase, lowercase, numbers, symbols);
    }

    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)

    const generateTheWord = (length, uppercase, lowercase, numbers, symbols) => {
        const availableCharacters = [
            ...(lowercase ? lowerCaseLetters : []),
            ...(uppercase ? upperCaseLetters : []),
            ...(numbers ? numbersArray : []),
            ...(symbols ? symbolsArray : []),
        ];
        const characters = shuffleArray(availableCharacters).slice(0, length);
        setHandelText(characters.join(''));
        return characters;
    };


    return (
        <div className="mt-24 md:mt-8">
            <div className="container w-[90%] md:w-1/2 p-8">
                <h2 className='font-bold text-3xl mb-4 text-center'>Free Password Generator</h2>
                <div className="flex gap-x-2">
                    <input
                        type="text"
                        value={handelText}
                        placeholder=""
                        autoComplete="off"
                        onChange={(e) => setHandelText(e.target.value)}
                    />
                    <button
                        className="w-1/4 pointer rounded font-bold bg-btn"
                        onClick={() => {
                            if (handelText.length > 0) {
                                navigator.clipboard.writeText(handelText)
                                setCopied(true);
                                setInterval(() => {
                                    setCopied(false);
                                }, 2000);
                            }
                        }}
                    >
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
                <br />
                <div className="word-crieteria__box">
                    <div>
                        <label>Password length</label>
                    </div>
                    <div>
                        <input
                            type="number"
                            min="4"
                            max="20"
                            value={passwordConfig.length}
                            onChange={(e) => setPasswordLength(e.target.value)}
                        />
                    </div>
                </div>
                <div className="word-crieteria__box">
                    <div>
                        <label>Include uppercase letters</label>
                    </div>
                    <div>
                        <CheckBox
                            value={passwordConfig.uppercase}
                            onChange={handleChangeUppercase}
                        />
                    </div>
                </div>
                <div className="word-crieteria__box">
                    <div>
                        <label>Include lowercase letters</label>
                    </div>
                    <div>
                        <CheckBox
                            value={passwordConfig.lowercase}
                            onChange={handleChangeLowercase}
                        />
                    </div>
                </div>
                <div className="word-crieteria__box">
                    <div>
                        <label>Include numbers</label>
                    </div>
                    <div>
                        <CheckBox
                            value={passwordConfig.numbers}
                            onChange={handleChangeNumbers}
                        />
                    </div>
                </div>
                <div className="word-crieteria__box">
                    <div>
                        <label>Include symbols</label>
                    </div>
                    <div>
                        <CheckBox
                            value={passwordConfig.symbols}
                            onChange={handleChangeSymbols}
                        />
                    </div>
                </div>
                <div className='w-full text-center'>
                    <button
                        className="bg-btn font-bold w-fit py-3 px-5 mt-6 text-[16px] rounded" 
                        onClick={generatePassword}
                    >
                        Generate password
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Generator