'use strict';

/**
 * global-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-page.global-page');
