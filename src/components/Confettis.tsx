import React from 'react';
import '../styles/components/Confettis.scss';

const Confettis: React.FC = () => {
    const renderConfettis = (): JSX.Element[] => {
        const Confettis: any[] = [];
        let i = 300;

        while (i > -1) {
            Confettis.push(
                <div key={i} className={`confetti-${i} _fixed`}></div>
            );
            i--;
        }

        return Confettis;
    };

    return <>{renderConfettis()}</>;
};

export default Confettis;
