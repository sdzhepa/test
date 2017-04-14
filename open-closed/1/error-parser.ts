import { INFO, DEBUG, WARN, ERROR} from 'LoggerLevels';
import { logger } from 'logger';


export default function getDecorateData(log) {
    switch (log.type) {
        case INFO:
            return {
                underline: false,
                color: 'blue'
            };
        case DEBUG:
            return {
                underline: false,
                color: 'yellow'
            };
        case WARN:
            return {
                underline: false,
                color: 'yellow'
            };
        case ERROR:
            return {
                underline: false,
                color: 'yellow'
            };
        default:
            return {
                underline: false,
                color: null
            }
    }

}