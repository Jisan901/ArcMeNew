import { About } from "../components/ark/About"
import { Hero } from "../components/ark/Hero"
import { Services } from "../components/ark/Services"
import { ServicesCards } from "../components/ark/ServicesCards"
import { Vision } from "../components/ark/Vision"
import { Block } from "../components/temp/Block"

export const RootWindow = () => {
  return (<>
    <div>
        <Hero/>
        <Vision/>
      <About/>
      <ServicesCards/>
      <Services/>

      <Block width="100%" height="300vh" color="var(--dark-color)" className="relative"></Block>
    </div>
    </>
  )
}
