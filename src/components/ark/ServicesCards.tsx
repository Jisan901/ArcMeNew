import { CardServicesSm } from "./CardServicesSm"

export const ServicesCards = () => {
  return (
    <div className="grid place-items-center grid-cols-4 gap-5 bg-[var(--dark-color)] py-10">
        <CardServicesSm/>
        <CardServicesSm/>
        <CardServicesSm/>
        <CardServicesSm/>
    </div>
  )
}
