import { useSelector, useDispatch } from 'react-redux'
import { handleLength } from '../Redux/slices/passwordConfigSlice'

const LengthInput = () => {
    const changedLength = useSelector(state => state.passwordConfig.length)
    const dispatch = useDispatch()
    
    return (
        <>
            <div>
                <label>Password length</label>
            </div>
            <div>
                <input
                    type="number"
                    min="6"
                    max="30"
                    value={changedLength}
                    onChange={(e) => dispatch(handleLength(e.target.value))}
                />
            </div>
        </>
    )
}

export default LengthInput