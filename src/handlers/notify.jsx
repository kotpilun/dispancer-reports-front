import { toast } from 'react-toastify';

export function notify(type, message) {
    switch(type) {
        case 'success':
            toast.success(message, {hideProgressBar: true, position: "bottom-left"});
            break;
        case 'error':
            toast.error(message, {hideProgressBar: true, position: "bottom-left"});
            break;
    };
};