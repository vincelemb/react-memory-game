import { snakeCase } from 'lodash';
import memoryImages from '../assets/images.json';

const generateUrlImages = (theme: string, level: number): string[] => {
    const themeParsed = snakeCase(theme);
    const imageNames: string[] = Object.values(memoryImages[themeParsed]);

    return imageNames
        .filter((image, idx) => idx < level / 2)
        .map((image) => `./assets/img/${themeParsed}/${image}`);
};

export default generateUrlImages;
