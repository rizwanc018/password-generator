import UpperCaseChekbox from './UpperCaseChekbox';
import LowerCaseCheckBox from './LowerCaseCheckBox';
import NumbersCheckbox from './NumbersCheckbox';
import SymbolsCheckbox from './SymbolsCheckbox';
import LengthInput from './LengthInput';
import PasswordField from './PasswordField';
import GenerateButton from './GenerateButton';
import './Generator.css'


const Generator = () => {

    return (
        <div className="mt-24 md:mt-14">
            <div className="container w-[90%] md:w-1/2 xl:w-1/3 p-8">
                <h2 className='font-bold text-3xl mb-4 text-center'>Free Password Generator</h2>
                <PasswordField />
                <br />
                <div className="word-crieteria__box">
                    <LengthInput />
                </div>
                <div className="word-crieteria__box">
                    <UpperCaseChekbox />
                </div>
                <div className="word-crieteria__box">
                    <LowerCaseCheckBox />
                </div>
                <div className="word-crieteria__box">
                    <NumbersCheckbox />
                </div>
                <div className="word-crieteria__box">
                    <SymbolsCheckbox />
                </div>
                <div className='w-full text-center'>
                    <GenerateButton/>
                </div>
            </div>
        </div>
    )
}

export default Generator