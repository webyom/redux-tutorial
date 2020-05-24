import { createLogger, format, transports } from 'winston';
import { config } from './config';

const logger = createLogger({
  level: config.ENV === 'local' ? 'info' : 'error',
  format:
    config.ENV === 'local'
      ? format.combine(format.colorize(), format.timestamp(), format.simple())
      : format.combine(format.timestamp(), format.errors({ stack: true }), format.splat(), format.json()),
  defaultMeta: { service: 'redux-tutorial' },
  transports: [
    new transports.Console({
      stderrLevels: ['error'],
    }),
  ],
});

export { logger };
