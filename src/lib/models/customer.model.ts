export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: "Masculino" | "Femenino" | "Otro";
  cellphone: string;
  homephone: string;
  addressHome: string;
  profession: string;
  incomes: number;
}
