import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPassword } from '../Redux/slices/passwordSlice'



const PasswordField = () => {
    const [copied, setCopied] = useState(false);

    const generatedPassword = useSelector(state => state.password.gneratedPassword)
    const dispatch = useDispatch()

    return (
        <>
            <div className="flex gap-x-2">
                <input
                    type="text"
                    value={generatedPassword}
                    placeholder=""
                    autoComplete="off"
                    disabled={!generatedPassword.length}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                />
                <button
                    className="w-1/4 pointer rounded font-bold bg-btn"
                    onClick={() => {
                        if (generatedPassword.length > 0) {
                            navigator.clipboard.writeText(generatedPassword)
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
        </>
    )
}

export default PasswordField