const Button = ({label, iconURL, backgroundColor, textColor, borderColor, hoverColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full transition-colors  duration-300
    
    
    ${fullWidth && 'w-full'}

    ${backgroundColor 
    ? `${backgroundColor} ${textColor} ${borderColor} ${hoverColor}`
    : 'bg-coral-red border-coral-red text-white hover:bg-red-500'}`}>

        {label}
        {iconURL && <img src={iconURL} alt="icon"
        className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button