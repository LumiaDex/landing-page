import { isEmpty } from "lodash";

interface IENVS {
  VITE_IS_MAINNET: boolean;
  VITE_VERSION: string;
  FAST_REFRESH: boolean;
  VITE_BASE_API: string;
}

const defaultEnvs: IENVS = {
  VITE_IS_MAINNET: false,
  VITE_VERSION: "1.0",
  FAST_REFRESH: true,
  VITE_BASE_API: "https://dev-api.zentura.io/",
};

export const getEnvs = () => {
  let envs: any = {};
  try {
    const PROCCESS_ENV = import.meta.env;
    if (!isEmpty(PROCCESS_ENV)) {
      Object.keys(PROCCESS_ENV).forEach((key: string) => {
        const value = PROCCESS_ENV[key];
        if (value === "true" || value === "false") {
          envs[key] = value === "true";
        } else {
          envs[key] = PROCCESS_ENV[key];
        }
        return key;
      });
    }
  } catch (error) {
    console.debug(error);
  } finally {
    envs = isEmpty(envs) ? defaultEnvs : envs;
  }
  return { ...envs, VITE_DOMAIN_URL: window.location.origin };
  return defaultEnvs;
};

export const ENVS: IENVS = getEnvs();

export const isMainnet: boolean = ENVS.VITE_IS_MAINNET;
// export const appDomain: string = ENVS.VITE_DOMAIN_URL;
