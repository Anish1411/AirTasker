'use strict';

/**
 * global-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-page.global-page');
