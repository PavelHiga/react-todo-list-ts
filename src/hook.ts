import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./redux/store";
import type { TypedUseSelectorHook } from "react-redux";

export const appUseDispatch = () => useDispatch<AppDispatch>();
export const appUseSelector: TypedUseSelectorHook<RootState> = useSelector;
