import CheckBox from "./CheckBox"
import { useSelector, useDispatch } from 'react-redux'
import { handleSymbol } from '../Redux/slices/passwordConfigSlice'

const SymbolsCheckbox = () => {
    const symbolSelected = useSelector(state => state.passwordConfig.symbols)
    const dispatch = useDispatch()

    const handleChangeSymbols = () => {
        dispatch(handleSymbol())
    }
    return (
        <>
            <div>
                <label>Include symbols</label>
            </div>
            <div>
                <CheckBox
                    value={symbolSelected}
                    onChange={handleChangeSymbols}
                />
            </div>
        </>
    )
}

export default SymbolsCheckbox