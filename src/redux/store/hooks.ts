import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()