import React, { createContext, useState } from 'react';

type RecordObject = {
    [level: number]: { clicks: number; time: string };
};

export type RecordsContext = {
    records: RecordObject;
    setRecords: React.Dispatch<React.SetStateAction<RecordObject>> | any;
};

export const RecordsContext = createContext<RecordsContext>({
    records: {},
    setRecords: undefined,
});

export const RecordsProvider = ({ children }) => {
    const [records, setRecords] = useState({});

    return (
        <RecordsContext.Provider value={{ records, setRecords }}>
            {children}
        </RecordsContext.Provider>
    );
};
