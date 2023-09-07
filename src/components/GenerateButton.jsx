import { useSelector, useDispatch } from 'react-redux'
import { setPassword } from '../Redux/slices/passwordSlice'
import toast, { Toaster } from 'react-hot-toast';


const GenerateButton = () => {

    const passwordConfig = useSelector(state => state.passwordConfig)
    const dispatch = useDispatch()

    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97)
    const lowerCaseLetters = characterCodes.map((code) => String.fromCharCode(code))
    const upperCaseLetters = lowerCaseLetters.map((letter) => letter.toUpperCase())

    function generatePassword() {
        const { length, uppercase, lowercase, numbers, symbols } = passwordConfig
        if (length < 6 || length > 30) {
            toast.error('Length must be between 6 and 30')
        } else if (uppercase == false && lowercase == false && numbers == false && symbols == false) {
            toast.error('Atleast one option should be selected')
        } else {
            generateTheWord(length, uppercase, lowercase, numbers, symbols);
        }
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
        dispatch(setPassword(characters.join('')));
        return characters;
    };

    return (
        <>
            <Toaster />
            <button
                className="bg-btn font-bold w-fit py-3 px-5 mt-6 text-[16px] rounded"
                onClick={generatePassword}
            >
                Generate password
            </button>
        </>
    )
}

export default GenerateButton