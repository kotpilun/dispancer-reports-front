import { useSelector } from "react-redux";
import { CATEGORIES } from "../config/config";

export const useSelect = () => {
    const dispancers = useSelector((state) => state.dispancerReduser.dispancersInfo);

    const renderDispancers = () => {
        if (!dispancers?.allDispancers?.length) {
            return null;
        }
    
        return dispancers.allDispancers.map((value) => (
            <option key={value._id} value={value.name}>
                {value.name}
            </option>
        ));
    };

    const renderSportStates = () => {

        return Object.entries(CATEGORIES).map(([key, value]) => (
            <option key={key} value={value}>
                {value}
            </option>
        ));
    };

    return { renderDispancers, renderSportStates };
};