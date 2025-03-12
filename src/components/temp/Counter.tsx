import { useCallback, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"
import { incrementByAmount } from "../../redux/slices/app/counterSlice";

export const Counter = () => {
    const counter = useAppSelector(state=>state.counter.value)
    const dispatch = useAppDispatch();

    const onClick = useCallback((event:MouseEvent)=>{
        dispatch(incrementByAmount(event.clientY))
      },[])

    useEffect(() => {
      window.addEventListener('click',onClick)
      return () => {
        window.removeEventListener('click',onClick)
      }
    }, [])
    
  return (
    <div>{counter}</div>
  )
}
