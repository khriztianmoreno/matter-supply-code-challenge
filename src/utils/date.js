/**
 * Helper to format the dates
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import moment from 'moment';

export default (value, format) => moment(String(value)).format(format);
