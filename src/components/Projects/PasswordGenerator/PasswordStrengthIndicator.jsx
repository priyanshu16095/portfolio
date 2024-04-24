const PasswordStrengthIndicator = ({password}) => {

    const getPasswordStrength = () => {
        const passwordLength = password.length

        if(passwordLength === 1) {
            return ''
        } else if(passwordLength < 4) {
            return ['Very Weak', '#c1121f']
        } else if(passwordLength < 8) {
            return ['Poor', 'red']
        } else if(passwordLength < 12) {
            return ['Medium', '#f77f00']
        } else if(passwordLength < 16) {
            return ['Strong', 'green']
        } else {
            return ['Very Strong', 'blue']
        }
    }

    const passwordStrength = getPasswordStrength()
    if(!passwordStrength) return <React.Fragment></React.Fragment>

    return (
        <div className="strengthContainer flex-h">
            <p>Strength</p>
            <p className="strengthInfo" style={{backgroundColor:passwordStrength[1]}}>{passwordStrength[0]}</p>
        </div>
    )

}

export default PasswordStrengthIndicator