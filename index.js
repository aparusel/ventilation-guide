function getCoefficients(temp) {
    let c1, c2;
    if (temp < 0) {
        c1 = 17.84362;
        c2 = 245.425;
    } else {
        c1 = 17.08085;
        c2 = 234.175;
    }
    return {c1, c2};
}

function calcDewPoint(temp, hum) {
    const {c1, c2} = getCoefficients(20);
    return c2 * (c1 * temp / (c2 + temp) + Math.log(hum/100)) / (c1 * c2 / (c2 + temp) - Math.log(hum/100));  
}

function getRecommendation(tempIn, humIn, tempOut, humOut) {
    const dewPointIn = calcDewPoint(tempIn, humIn);
    const dewPointOut = calcDewPoint(tempOut, humOut);
    const diff = dewPointIn - dewPointOut;

    if (diff < -5) {
        return '--';
    } else if (diff < -1) {
        return '-';
    } else if (diff < 1) {
        return '0';
    } else if (diff < 5) {
        return '+';
    } else {
        return '++';
    }
}

exports.getCoefficients = getCoefficients;
exports.calcDewPoint = calcDewPoint;
exports.getRecommendation = getRecommendation;
