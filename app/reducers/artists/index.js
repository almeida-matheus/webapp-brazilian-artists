const initialState = {
	isFetching: false,
	result: [
		{
			name: 'Cássia Eller',
			image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/7/2/a/c72a4443941a6707c31fd8e9fcd43131.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/C%C3%A1ssia_Eller'
		},
		{
			name: 'Elis regina',
			image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/a/6/2/9/a629aba7dc3013a25ad3ad7166e21fb5.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Elis_Regina'
		},
		{
			name: 'Renato Russo',
			image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/3/e/4/5/3e453e929ad600b322857d1f76cded99.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Renato_Russo'
		},
		{
			name: 'Mallu Magalhães',
			image: 'https://s-media-cache-ak0.pinimg.com/736x/77/5d/99/775d992a9d7e8e5ee477baa97fd41e53.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Mallu_Magalh%C3%A3es'
		},
		{
			name: 'Marcelo Camelo',
			image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/3/8/1/a/381a0b24edeb6424476a836552b686c7.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Marcelo_Camelo'
		},
		{
			name: 'Rodrigo Amarante',
			image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/3/8/f/9/38f93ce368a2d9e02a3bfac106461a9f.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Rodrigo_Amarante'
		},
		{
			name: 'Cazuza',
			image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/3/f/4/d/3f4dd04dfc52054ec46826e0a9d3761e.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Cazuza'
		},
		{
			name: 'Pixinguinha',
			image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/2/d/5/c2d578509ee700573ccbcc2be6c417f8.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Pixinguinha'
		},
		{
			name: 'Adoniran Barbosa',
			image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/0/b/4/0/0b40b3b83a9da2c59ad99527a718e600.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Adoniran_Barbosa'
		},
		{
			name: 'Bezerra da Silva',
			image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/2/f/9/c2f9dbe48b90c9b066795845e035767e.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Bezerra_da_Silva'
		},
		{
			name: 'Caetano Veloso',
			image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/f/1/9/b/f19b7f7587f1a0835cba2d37661cef42.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Caetano_Veloso'
		},
		{
			name: 'Chico Buarque',
			image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/5/b/8/8/5b8880d71d7525db283ffa07a11648a0.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Chico_Buarque'
		},
		{
			name: 'Maysa',
			image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/6/0/e/3/60e35da866c8ae677a0afd4815bda14c.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Maysa'
		}
	]
};

function artistsReducer (state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default artistsReducer;