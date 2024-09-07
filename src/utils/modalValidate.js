export const modalValidate = (updatedChildInfo) => {
    const isFormValid = updatedChildInfo?.name?.length >= 3 
        && updatedChildInfo?.surname?.length >= 3 
        && updatedChildInfo?.secondName?.length >= 3
        && updatedChildInfo?.dateOfBirth?.length >= 3
        && updatedChildInfo?.address?.length >= 3;

        return isFormValid;
};