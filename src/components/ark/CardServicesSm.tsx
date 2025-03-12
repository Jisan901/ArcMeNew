import { ServerIcon } from "@heroicons/react/24/outline"

export const CardServicesSm = () => {
  return (
    <div className="w-40 h-40 rounded-lg  bg-[rgba(255,255,255,0.1)] flex justify-center items-center flex-col p-3 gap-6 group hover-pointer-scale">
        <ServerIcon className="w-12 h-12 text-gray-300 group-hover:block hidden"/>
        <h3 className="text-1xl font-extrabold text-gray-300 text-center group-hover:block hidden">Spacial service</h3>
    </div>
  )
}
