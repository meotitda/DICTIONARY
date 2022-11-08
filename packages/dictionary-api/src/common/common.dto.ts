export interface ControllerResultDto<T> {
  items: T;
  statusCode: number;
  message: string;
}

export interface ServiceResultDto<T> {
  items: T;
}
