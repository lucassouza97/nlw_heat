import swaggerJSDoc from 'swagger-jsdoc'

const options = {
	apis: ['./src/routes/*.ts'],
	basePath: '/',
	swaggerDefinition: {
		info: {
			description: 'NLW Heat',
			title: 'Next Level Week - Heat(Backend)',
			version: '1.0',
		},
		schemes: ['http'],
	},
}

const specs = swaggerJSDoc(options)

export default specs
