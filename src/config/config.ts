//export const DOMAIN = "cstb-dev.us.auth0.com";
//export const CLIENT_ID = "i8sogM2Ds42uiX6CxHe6fwXPdGRj5AEK";

const environments: { [index: string]: string } = {
  local: "config-local",
  dev: "config-dev",
  prod: "config-prod"
};

type EnvConfig = {
  BASE_HOST_URL: string;
};

type Config = {
  environment: { name?: string };
  domain: string;
  clientId: string;
} & Partial<EnvConfig>;

let config: Config = {
  environment: {
    name: ""
  },
  domain: "",
  clientId: ""
};

function setEnvironmentSpecificProperties(): void {
  const envName = process.env.REACT_APP_ENV || "local";
  const envConfig = environments[envName];

  console.debug("Environment:", envName);
  if (envName) {
    config.environment.name = envName;
  }

  if (envConfig) {
    config = Object.assign({}, config, require(`./${envConfig}`).default);
  }
}

setEnvironmentSpecificProperties();

export { config as default };
