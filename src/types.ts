export interface Settings {
  length: number;
  digits: number;
  symbols: number;
  ambiguous: boolean;
}

export enum Status {
  VERY_WEAK = 'Very Weak',
  WEAK = 'Weak',
  AVERAGE = 'Average',
  STRONG = 'Strong',
  SECURE = 'Secure',
}

export interface ColoredStatus { label: Status; color: string; }
