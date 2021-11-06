import { config } from 'dotenv';
import { each } from 'lodash';

let envs: any = {};

const result = config();

if (!('error' in result)) {
  envs = result.parsed;
} else {
  // eslint-disable-next-line
  each(process.env, (value: any, key: any) => envs[key] = value);
}

export default {
  nodeEnv: envs.NODE_ENV,
  apiHost: envs.NODE_ENV === 'development' ? 'http://localhost:9000' : 'https://fsjs-menfou.herokuapp.com/',
};
