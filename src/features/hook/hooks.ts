// hooks.ts
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "../../store";

// ✅ Typed dispatch for thunks
export const useAppDispatch = () => useDispatch<AppDispatch>();

// ✅ Typed selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
