import './index.scss'

const Button = ({className, textButton, event, params}) => {
    return (
        <button type='button' className={'button ' + className} onClick={() => event(params)}>
            { textButton }
        </button>
    )
}

export default Button