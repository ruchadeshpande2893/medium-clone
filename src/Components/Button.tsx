type ButtonProps = {
    type: "submit" | "reset" | "button" | undefined
    onClick?: () => void
    value: string
    className?: string
}


export default function Button({ type, onClick, value, className }: ButtonProps) {
    return (
        <button type={type} onClick={onClick} className={className}>{value}</button>
    )
}