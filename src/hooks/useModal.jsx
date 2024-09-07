import { useDispatch, useSelector } from "react-redux";
import { setChildInfo } from "../redux/slices/childrenListSlice";
import { modalValidate } from "../utils/modalValidate";
import { setIsEnabled } from "../redux/slices/buttonIsEnabledSlice";

export const useModal = () => {
    const childInfo = useSelector((state) => state.childrenReducer.childInfo);
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        const updatedChildInfo = { ...childInfo, [name]: value };
        
        dispatch(setChildInfo(updatedChildInfo));
        
        const isFormValid = modalValidate(updatedChildInfo);

        dispatch(setIsEnabled(isFormValid));
    };

    return { onChangeHandler }
}