import Data from './data.json';
import TextUtils from '../utils/TextUtils';

const DEFAULT_LOCALE = 'en';
const DILIMETER = '.';

const REF_HOLDER_LINK = 1;
const REF_DEST_LINK = 2;

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

    static resolveRefences(value, locale = this._recognizeLocale()) {
        const scheme = value.split(':');
        return this.getValue(scheme[REF_HOLDER_LINK], locale)[scheme[REF_DEST_LINK]];
    }

    static isReference(obj) {
        if (!TextUtils.isString(obj)) {
            return false;
        }

        return obj.includes('ref:');
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
