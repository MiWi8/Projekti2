const Button = ({ 
    children, 
    onClick, 
    className = '', 
    type = 'button',
    disabled = false,
    variant = 'primary'
    }) => {
        return (
            <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-${variant} ${className}`}
            >
            {children}
            </button>
        )
    }

export default Button