import { toast } from 'react-toastify';

export function notify(type, message) {
    switch(type) {
        case 'success':
            toast.success(message, {hideProgressBar: true});
            break;
        case 'error':
            toast.error(message, {hideProgressBar: true});
            break;
    };
};