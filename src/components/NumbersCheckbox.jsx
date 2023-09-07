import { useSelector, useDispatch } from 'react-redux'
import { handleNumber } from '../Redux/slices/passwordConfigSlice'
import CheckBox from "./CheckBox"

const NumbersCheckbox = () => {
    const numberSelected = useSelector(state => state.passwordConfig.numbers)
    const dispatch = useDispatch()

    const handleChangeNumbers = () => {
        dispatch(handleNumber())
    }
    return (
        <>
            <div>
                <label>Include numbers</label>
            </div>
            <div>
                <CheckBox
                    value={numberSelected}
                    onChange={handleChangeNumbers}
                />
            </div>
        </>
    )
}

export default NumbersCheckbox