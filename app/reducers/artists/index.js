const initialState = {
	isFetching: false,
	result: [
		{
			name: 'Cássia Eller',
			image: 'http://jb.fm/wp-content/uploads/2016/12/cassia-eller.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/C%C3%A1ssia_Eller'
		},
		{
			name: 'Elis regina',
			image: 'http://blogs.atribuna.com.br/blognroll/wp-content/uploads/2016/10/maxresdefault-3.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Elis_Regina'
		},
		{
			name: 'Renato Russo',
			image: 'http://www.diariodocentrodomundo.com.br/wp-content/uploads/2013/05/renato_russo_31.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Renato_Russo'
		},
		{
			name: 'Mallu Magalhães',
			image: 'http://www.guiadasemana.com.br/contentFiles/system/pictures/2016/8/169407/original/mallu-magalhaes.png',
			wiki: 'https://pt.wikipedia.org/wiki/Mallu_Magalh%C3%A3es'
		},
		{
			name: 'Marcelo Camelo',
			image: 'http://www.suasletras.com/fotos_artista/15224fd8e9097c1f50a4b55c6150d7f3.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Marcelo_Camelo'
		},
		{
			name: 'Rodrigo Amarante',
			image: 'http://www.loshermanos.blog.br/wp-content/uploads/2015/06/tudo-sobre-rodrigo-amarante.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Rodrigo_Amarante'
		},
		{
			name: 'Cazuza',
			image: 'http://www.suasletras.com/fotos_artista/63f0f07e5842828cee6d968433ad2ed8.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Cazuza'
		},
		{
			name: 'Pixinguinha',
			image: 'http://www.ims.com.br/images/32/67/arq_3267.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Pixinguinha'
		},
		{
			name: 'Adoniran Barbosa',
			image: 'http://f.i.uol.com.br/folha/saopaulo/images/15219725.jpeg',
			wiki: 'https://pt.wikipedia.org/wiki/Adoniran_Barbosa'
		},
		{
			name: 'Bezerra da Silva',
			image: 'http://maryjuana.com.br/wp-content/uploads/2015/05/Bezerra-da-Silva.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Bezerra_da_Silva'
		},
		{
			name: 'Caetano Veloso',
			image: 'http://www.suasletras.com/fotos_artista/027ee51b73e930e48d19e6791610ebe0.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Caetano_Veloso'
		},
		{
			name: 'Chico Buarque',
			image: 'http://cdn.revistabula.com/wp/wp-content/uploads/2014/06/Chico-Buarque-1.jpg',
			wiki: 'https://pt.wikipedia.org/wiki/Chico_Buarque'
		},
		{
			name: 'Maysa',
			image: 'http://2.bp.blogspot.com/-i1qg_n_ba5o/UP4rINZlMwI/AAAAAAAABlQ/O87QHJpgW9Q/s1600/Untitled-118bc96.jpg',
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