import { useSelector } from "react-redux";

export const useAuth = () => useSelector(s => s.auth) ;