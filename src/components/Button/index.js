import './index.scss'

const Button = ({textButton, event, params}) => {
    return (
        <button type='button' className='button' onClick={() => event(params)}>
            { textButton }
        </button>
    )
}

export default Button