import swaggerJsdoc from 'swagger-jsdoc';

export function getSwaggerSpecs(): ReturnType<typeof swaggerJsdoc> {
  return swaggerJsdoc({
    // List of files to be processed.
    // You can also set globs for your apis
    apis: ['./www/src/routes/**/*.ts'],
    basePath: '/',
    swaggerDefinition: {
      info: {
        description: 'Test API with autogenerated swagger doc',
        title: 'Redux Tutorial API',
        version: '1.0.0',
      },
    },
  });
}
