const REGEX = {
  NAME: /^[a-záéíóúñ]+$/i,
  PHONE: /^\d{8}$/,
  ADDRESS: /^[a-z0-9áéíóúñ\s.,#-]+$/i,
  INCOME: /^\d+(\.\d{1,2})?$/,
};

export const validateFirstName = (firstName: string): string | undefined => {
  if (!REGEX.NAME.test(firstName)) return "Sólo letras";
  if (firstName.length < 2 || firstName.length > 30)
    return "Longitud entre 2 y 30";
};

export const validateLastName = (lastName: string): string | undefined => {
  if (!REGEX.NAME.test(lastName)) return "Sólo letras";
  if (lastName.length < 2 || lastName.length > 30)
    return "Longitud entre 2 y 30";
};

export const validatePhoneNumber = (
  phoneNumber: string,
): string | undefined => {
  if (!REGEX.PHONE.test(phoneNumber))
    return "Debe contener exactamente 8 dígitos";
};

export const validateAddress = (address: string): string | undefined => {
  if (!REGEX.ADDRESS.test(address))
    return "Sólo letras, números, espacios y algunos caracteres especiales (.,#-)";
  if (address.includes("  ")) return "No puede tener doble espacio";
  if (address.includes("--")) return "No puede tener doble guión";
  if (address.length < 5 || address.length > 100)
    return "Longitud entre 5 y 100";
};

export const validateIncomes = (incomes: string): string | undefined => {
  if (!REGEX.INCOME.test(incomes))
    return "Debe ser un número con hasta dos decimales";
  const value = parseFloat(incomes);
  if (value < 0) return "No puede ser un número negativo";
  if (value > 1000000) return "No puede ser mayor a 1,000,000";
};
