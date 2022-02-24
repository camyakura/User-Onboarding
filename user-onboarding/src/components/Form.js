

function Form (props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value} = evt.target
        change(name, value)
    }
    
    return (
        <form>
            <div>
                <label>First Name
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                    /> 
                </label>
                <label>Email
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input 
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service
                    <input 
                        type='checkbox'
                        name='termsOfService'
                        checked={values.terms}
                        onChange={onChange}
                    /> 
                </label>
            <button >submit</button>
            </div>
        </form>
    )
}

export default Form;