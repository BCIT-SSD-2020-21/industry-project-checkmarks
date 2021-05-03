import React, { useState, useEffect } from 'react';
import { Prompt } from 'react-router-dom';

const PageLeavePrompt = (message = 'Discard changes?') => {
    const [isDirty, setDirty] = useState(false);

    useEffect(() => {
        // Detecting browser clse
        window.onbeforeunload = isDirty && (() => message);

        return () => {
            window.onbeforeunload = null;
        };
    }, [isDirty]);

    const routerPrompt = <Prompt when={isDirty} message={message} />;

    return [routerPrompt, () => setDirty(true), () => setDirty(false)];
};

export default PageLeavePrompt;
