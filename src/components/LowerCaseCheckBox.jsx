import CheckBox from "./CheckBox"
import { useSelector, useDispatch } from 'react-redux'
import { handleLowerCase } from '../Redux/slices/passwordConfigSlice'


const LowerCaseCheckBox = () => {
    const lowercasaeSelected = useSelector(state => state.passwordConfig.lowercase)
    const dispatch = useDispatch()

    const handleChangeLowercase = () => {
        dispatch(handleLowerCase())
    }
    return (
        <>
            <div>
                <label>Include lowercase letters</label>
            </div>
            <div>
                <CheckBox
                    value={lowercasaeSelected}
                    onChange={handleChangeLowercase}
                />
            </div>
        </>
    )
}

export default LowerCaseCheckBox