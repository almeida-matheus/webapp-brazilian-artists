const assign = Object.assign;

const initialState = {
	isFetching: false,
	didInvalidate: false,
	rooms: [1, 2, 3],
	roomsById: {
		1: {
			id: 1,
			name: 'Banheiro'
		},
		2: {
			id: 2,
			name: 'Cozinha'
		},
		3: {
			id: 3,
			name: 'Quarto'
		},
		4: {
			id: 4,
			name: 'Cozinha'
		},
		5: {
			id: 5,
			name: 'Cozinha'
		},
		6: {
			id: 6,
			name: 'Cozinha'
		},
		7: {
			id: 7,
			name: 'Cozinha'

		}
	}
};


function room(state = initialState, action) {
	switch (action.type) {
		case 'TESTE':
			return assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				rooms: action.rooms,
				roomsById: action.roomsById
			});

		default: {
			return state;
		}
	}
}

export default room;