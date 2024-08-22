import { useEffect, useState } from 'react';

const ProgressBar = ({ value }) => {
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        // Trigger the animation after the component mounts
        const timeout = setTimeout(() => setProgressValue(value), 100);
        return () => clearTimeout(timeout);
    }, [value]);

    return (
        <progress
            className="progress duration-300 progress-accent w-40 rounded-none"
            value={progressValue}
            max="100"
        ></progress>
    );
};

export default ProgressBar;
