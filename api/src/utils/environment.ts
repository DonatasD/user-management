export enum Environment {
  Workplace = 'workplace',
  Development = 'dev',
  Test = 'test',
  Staging = 'staging',
  Production = 'prod',
}

export const getEnvironment = (): Environment => {
  switch (process.env.NODE_ENV) {
    case 'workplace':
      return Environment.Workplace;
    case 'dev':
    case 'development':
      return Environment.Development;
    case 'test':
      return Environment.Test;
    case 'staging':
      return Environment.Staging;
    case 'prod':
    case 'production':
      return Environment.Production;
    default:
      return Environment.Workplace;
  }
};

export const getEnvFilePaths = () => {
  const environment = getEnvironment();
  return [`.env.${environment}.local`, `.env.${environment}`, '.env'];
};
