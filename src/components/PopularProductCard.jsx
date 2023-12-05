import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full lg:hover:scale-110 transition ease-out duration-300 lg:">
        <img src={imgURL} alt={name} 
        className="w-[280px] h-[280px] rounded-3xl lg:hover:-rotate-2 lg:hover:shadow-2xl transition-all duration-300"/>

        <div className="mt-8 flex justify-start gap-2">
            <img src={star} alt="rating"  width={24} height={24}/>
        <p className="font-montserrat text-xl leading-normal text-slate-gray ">(4.5)</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard