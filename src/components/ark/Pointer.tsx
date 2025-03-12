import { FC, useEffect, useRef } from "react"

export const Pointer:FC<{x:number, y:number}> = ({x,y}) => {
    const block = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        if (block.current){
            block.current.style.top = y+'px'
            block.current.style.left = x+'px'
        }
    },[x,y])
  return (
    <div ref={block} className="h-9 w-9 bg-white rounded-full -translate-1/2 z-20 fixed mix-blend-difference pointer-mx"></div>
  )
}
