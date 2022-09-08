import './index.scss'

const Button = ({className, textButton, event, params}) => {
    return (
        <button type='button' className={'button ' + className} onClick={(eventClick) => event(params, eventClick)}>
            { textButton }
        </button>
    )
}

export default Button