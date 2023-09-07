import CheckBox from "./CheckBox"
import { useSelector, useDispatch } from 'react-redux'
import { handleUppercase } from '../Redux/slices/passwordConfigSlice'

const UpperCaseChekbox = () => {
    const uppercaseSelected = useSelector(state => state.passwordConfig.uppercase)
    const dispatch = useDispatch()
    
    const handleChangeUppercase = () => {
        dispatch(handleUppercase())
    }
    return (
        <>
            <div>
                <label>Include uppercase letters</label>
            </div>
            <div>
                <CheckBox
                    value={uppercaseSelected}
                    onChange={handleChangeUppercase}
                />
            </div>
        </>
    )
}

export default UpperCaseChekbox