import Data from './data.json';

const DEFAULT_LOCALE = 'en';
const DILIMETER = '.';

export default class DataHelper {
    static getValue(path, locale = this._recognizeLocale()) {
        if (locale == DEFAULT_LOCALE) {
            return this._findValueByPath(path, DEFAULT_LOCALE);
        }

        const value = this._findValueByPath(path, locale);
        if (!value) { 
            return this._findValueByPath(path, DEFAULT_LOCALE);
        }

        return value;
    }

    static _recognizeLocale() {
        let locale = window.navigator.language;
        if (locale.includes('-')) locale = locale.split('-')[0];
        return locale || DEFAULT_LOCALE;
    }

    static _findValueByPath(path, locale = DEFAULT_LOCALE) {
        const pathParts = path.split(DILIMETER);
        const localizedData = Data[locale];

        let currentValue = localizedData;

        for (let i = 0; i < pathParts.length; i++) {
            const path = pathParts[i];
            if (!currentValue[path]) {
                currentValue = null;
                break;
            }
            currentValue = currentValue[path];
        }

        return currentValue;
    }
}
