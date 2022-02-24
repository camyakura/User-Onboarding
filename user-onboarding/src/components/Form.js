

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
        const {name, value, checked, type} = evt.target
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue)
    }
    
    return (
        <div>
            <h1>Character Form</h1>
            <p>{errors.name}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>
            <form onSubmit={onSubmit}>
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
                        name='tos'
                        checked={values.tos}
                        onChange={onChange}
                    /> 
                </label>
            <input disabled={disabled} type='submit' value='Create a Character'/>
            </form>
        </div>
    )
}

export default Form;