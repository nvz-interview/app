export const family = 'Roboto,Helvetica,Arial,sans-serif';

export const weight = {
    regular: 300,
    medium: 500,
    bold: 700
};

export const size = {
    h1: 26,
    h2: 20,
    h3: 16,
    h6: 11,
    big: 16,
    regular: 14,
    small: 13,
    tiny: 12
};

const typography = {
    h1: {size: size.h1, weight: weight.bold, lineHeight: 1},
    h2: {size: size.h2, weight: weight.medium, lineHeight: 1},
    h3: {size: size.h3, weight: weight.medium, lineHeight: 1},
    h6: {size: size.h6, weight: weight.bold, lineHeight: 1},
    big: {size: size.big, weight: weight.regular, lineHeight: 1.5},
    regular: {size: size.regular, weight: weight.regular, lineHeight: 1.5},
    small: {size: size.small, weight: weight.regular, lineHeight: 1},
    tiny: {size: size.tiny, weight: weight.regular, lineHeight: 1},
    weight
};

export default typography;
