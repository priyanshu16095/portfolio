import React, { useState } from 'react'

function usePasswordGenerator() {

    const[password, setPassword] = useState("")
    const[error, setError] = useState("")

    function generatePassword(checkboxData, length) {
        let charset = ""
        let generatedPassword = ""

        const selectedOptions = checkboxData.filter(checkbox => checkbox.state)

        if(selectedOptions.length === 0) {
            setError('Select atleast one option.')
            setPassword("")
            return
        }

        selectedOptions.forEach(option => {
            switch(option.title) {
                case "Include Uppercase Letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    break
                case "Include Lowercase Letters":
                    charset += "abcdefghijklmnopqrstvuwxyz"
                    break
                case "Include Numbers":
                    charset += "0123456789"
                    break
                case "Include Symbols":
                    charset += "!@#$%^&*()"
                    break
                default:
                    break
            }
        })
        
        for(let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length)
            generatedPassword += charset[randomIndex] 
        }
        
        setPassword(generatedPassword)
        setError("")
    }

    return {password, error, generatePassword}
}

export default usePasswordGenerator
