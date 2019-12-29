import palette from './palette';
import typography from './typography';
import patterns from './patterns';

export {default as normalization} from './normalization';

function unit(num = 1) {
    return this.patterns.unit * num;
}

export default {
    palette,
    typography,
    patterns,
    unit
};
