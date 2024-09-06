import { useEffect } from "react";

function TestComponent() {
    useEffect(() => {
        console.log('TestComponent is mounted');
    }, []);

    return <div>Test Component</div>;
}

export default TestComponent;