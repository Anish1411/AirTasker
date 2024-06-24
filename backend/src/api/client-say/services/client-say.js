'use strict';

/**
 * client-say service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-say.client-say');
