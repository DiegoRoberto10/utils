interface HTTPErrorProps {
  errorStatus: number;
  errorMessage: string;
}

interface ValidationObjectProps {
  required: boolean;
  label: string;
  type: string;
  value: string;
}

const httpErrorFunction = (errorStatus: number, errorMessage: string): HTTPErrorProps => ({ errorStatus, errorMessage });

const errors = {
  required: (label: string): HTTPErrorProps => httpErrorFunction(422, `O campo '${label}' é obrigatório`),
  invalidType: (label: string, correctType: string): HTTPErrorProps => httpErrorFunction(422, `O campo ${label} deve ser do tipo ${correctType}`)
};

export const types = { STRING: 'string', NUMBER: 'number', ARRAY: 'array', OBJECT: 'object' };

export const validator = (arrayValidation: ValidationObjectProps[]): void | HTTPErrorProps => {
  for (const { required, label, type, value } of arrayValidation) {
    if (required && !value) return errors.required(label);
    const isType: boolean = typeof value !== type;
    const isTypeArray: boolean = type === types.ARRAY && !Array.isArray(value);
    if (required && (isType || (isType && isTypeArray))) return errors.invalidType(label, type);
  };
};
