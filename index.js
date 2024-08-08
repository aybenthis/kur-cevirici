const { arabaStogu } = require('./arabaStogu.js');

const convertCurrency = (arabalar, dolarKuru) => {
  return arabalar.map((araba) => {
    return {
      ...araba,
      selling_price: Math.round(araba.selling_price * dolarKuru),
    };
  });
};
