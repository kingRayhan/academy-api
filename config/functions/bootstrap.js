"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const faker = require("faker");

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = async () => {
  if (process.env.NODE_ENV == "dev") {
    for (let i = 1; i <= 20; i++) {
      const title = faker.lorem.sentence(5);
      await strapi.services.chapters.create({
        title,
        slug: title.split(" ").join("-"),
        description: faker.lorem.paragraph(50),
        excerpt: faker.lorem.paragraph(20),
      });
    }
    console.log("20 Courses created");
  }
};
