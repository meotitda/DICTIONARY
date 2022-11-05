import { Type } from 'class-transformer';
import {
  IsString,
  registerDecorator,
  ValidateNested,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function IsArrayOfObjects(validationOptions?: ValidationOptions) {
  return (object: unknown, propertyName: string) => {
    registerDecorator({
      name: 'IsArrayOfObjects',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any): boolean {
          return (
            Array.isArray(value) &&
            value.every(
              (element: any) =>
                element instanceof Object && !(element instanceof Array),
            )
          );
        },
        defaultMessage: (validationArguments?: ValidationArguments): string =>
          `${validationArguments.property} must be an array of objects`,
      },
    });
  };
}
