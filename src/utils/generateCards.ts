import { Cards } from '../type/cards';
import { shuffle } from 'lodash';
import generateUrlImages from '../utils/generateUrlImages';

const generateCards = (theme: string, level: number): Cards[] => {
    const imageUrls = generateUrlImages(theme, level);
    const duplicatedImagesUrls = imageUrls.concat(...imageUrls);

    return shuffle(
        duplicatedImagesUrls.map((url, idx) => {
            return {
                id: idx,
                img: url,
            };
        })
    );
};

export default generateCards;
