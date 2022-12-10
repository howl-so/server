export interface HowlError {
  message?: string;
  error?: any;
}

export class RelationshipAlreadyExists implements HowlError {
  readonly message?: string = "Relationship already exists";
  readonly error?: any;
  readonly type: string;

  constructor(message?: string, error?: any) {
    this.message = message;
    this.error = error;
    this.type = this.constructor.name;
  }
}

export class NotFound implements HowlError {
  readonly message: string;
  readonly error?: any;
  readonly type: string;

  constructor(message: string, error?: any) {
    this.message = message;
    this.error = error;
    this.type = this.constructor.name;
  }
}

