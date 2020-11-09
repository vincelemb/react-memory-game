import React, { useContext } from 'react';
import {
    Container,
    BgImage,
    TabsGroup,
} from './components';
import { GameContext } from './context/GameContext';
import Options from './components/Options';
import Game from './components/Game';
import Confettis from './components/Confettis';

const Main = () => {
    const { isDone } = useContext(GameContext);

    return (
        <BgImage imageUrl={'./assets/img/lake.jpg'}>
            {isDone && <Confettis />}

            <Container maxWidth="991px" isCenteredX>
                <div className="_p-sm">
                    <TabsGroup
                        noTabsonDesktop={true}
                        contents={[
                            {
                                title: 'Options',
                                subcontent: (
                                    <div className="lg:_mr-none _mr-sm">
                                        <Options /> 
                                    </div>
                                ),
                            },
                            {
                                title: 'Jouer',
                                subcontent: <Game />,
                            },
                        ]}
                    />
                </div>
            </Container>
        </BgImage>
    );
};

export default Main;
