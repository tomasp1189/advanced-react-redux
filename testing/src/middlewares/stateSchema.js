export default {
	definitions: {},
	$schema: 'http://json-schema.org/draft-07/schema#',
	$id: 'http://example.com/root.json',
	type: 'object',
	title: 'The Root Schema',
	required: ['router', 'comments', 'auth'],
	properties: {
		router: {
			$id: '#/properties/router',
			type: 'object',
			title: 'The Router Schema',
			required: ['location', 'action'],
			properties: {
				location: {
					$id: '#/properties/router/properties/location',
					type: 'object',
					title: 'The Location Schema',
					required: ['pathname', 'search', 'hash', 'key'],
					properties: {
						pathname: {
							$id:
								'#/properties/router/properties/location/properties/pathname',
							type: 'string',
							title: 'The Pathname Schema',
							default: '',
							examples: ['/'],
							pattern: '^(.*)$'
						},
						search: {
							$id: '#/properties/router/properties/location/properties/search',
							type: 'string',
							title: 'The Search Schema',
							default: '',
							examples: [''],
							pattern: '^(.*)$'
						},
						hash: {
							$id: '#/properties/router/properties/location/properties/hash',
							type: 'string',
							title: 'The Hash Schema',
							default: '',
							examples: [''],
							pattern: '^(.*)$'
						},
						key: {
							$id: '#/properties/router/properties/location/properties/key',
							type: 'string',
							title: 'The Key Schema',
							default: '',
							examples: ['vuwvr6'],
							pattern: '^(.*)$'
						}
					}
				},
				action: {
					$id: '#/properties/router/properties/action',
					type: 'string',
					title: 'The Action Schema',
					default: '',
					examples: ['POP'],
					pattern: '^(.*)$'
				}
			}
		},
		comments: {
			$id: '#/properties/comments',
			type: 'array',
			title: 'The Comments Schema',
			items: {
				$id: '#/properties/comments/items',
				type: 'string',
				title: 'The Items Schema',
				default: '',
				examples: ['comment1', 'comment2'],
				pattern: '^(.*)$'
			}
		},
		auth: {
			$id: '#/properties/auth',
			type: 'boolean',
			title: 'The Auth Schema',
			default: false,
			examples: [false, true]
		}
	}
};
