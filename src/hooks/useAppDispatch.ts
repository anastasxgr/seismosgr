/**
 *        SPECIAL THANKS TO CHATGPT
 *    FOR THIS EXTRA HOOK BECAUSE I FIGHTING 2 DAYS
 *               TO FIND SOLUTION
 */

import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
