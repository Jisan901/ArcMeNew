
import { ServerIcon } from "@heroicons/react/24/outline"

export const CardServices = () => {
  return (
    <div className="w-64 h-64 rounded-lg  bg-[#272727] flex justify-center items-center flex-col p-3 gap-6 hover-pointer-scale">
        <ServerIcon className="w-12 h-12 text-gray-300 "/>
        <h3 className="text-1xl font-extrabold text-gray-300 text-center">Spacial service</h3>
        <p className="text-sm font-extrabold text-gray-300 text-center ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias magni laudantium eum similique quis tempora error!</p>
    </div>
  )
}
