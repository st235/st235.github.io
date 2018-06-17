const EMPTY_STRING = '';

export default class TextUtils {
    static isString(obj) {
        return typeof obj === 'string';
    }

    static isEmpty(text) {
        if (text && !this.isString(text)) {
            return false;
        }
        return !text || text.trim() === EMPTY_STRING;
    }
}