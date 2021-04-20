export enum Environment {
  Workplace = 'workplace',
  Development = 'dev',
  Test = 'test',
  Production = 'prod',
}

export const currentEnvironment = (): Environment => {
  switch (process.env.NODE_ENV) {
    case 'workplace':
      return Environment.Workplace;
    case 'dev':
      return Environment.Development;
    case 'test':
      return Environment.Test;
    case 'prod':
      return Environment.Production;
    default:
      return Environment.Workplace;
  }
};

export const envFilePath = () => {
  const environment = currentEnvironment();
  return [`.env.${environment}.local`, `.env.${environment}`, '.env'];
};
