import { createSlice } from '@reduxjs/toolkit'
import model from '../../public/model'


const initialState = {
	pointsList: [],
	nameValue: '',
	amountValue: '',
	xValue: 0,
	yValue: 0,
}

const pointSlice = createSlice({
	name: 'points',
	initialState,
	reducers: {
		// подгрузка массива модели
		loadFromLocalStorage(state) {
			const storageData = localStorage.getItem('points')
			if (!!storageData) {
				state.pointsList = JSON.parse(storageData)
			} else {
				localStorage.setItem('points', JSON.stringify(model))
			}
		},
		// логика обновлений модели
		addPoint(state, action) {
			state.pointsList.push(action.payload)
			localStorage.setItem('points', JSON.stringify(state.pointsList))
		},
		removePoint(state, action) {
			state.pointsList.filter(p => p.name !== action.payload)
			console.log(' action.payload: ', action.payload);
		},
		undoChanges(state) {
			localStorage.removeItem('points')
			state.pointsList = model
		},
		// обработка состояний инпутов
		setNameValue(state, action) {
			state.nameValue = action.payload
		},
		setAmountValue(state, action) {
			state.amountValue = action.payload
		},
		setXValue(state, action) {
			state.xValue = action.payload
		},
		setYValue(state, action) {
			state.yValue = action.payload
		},
	}
})

export const {
	loadFromLocalStorage,
	addPoint,
	removePoint,
	undoChanges,
	setNameValue,
	setAmountValue,
	setXValue,
	setYValue
} = pointSlice.actions
export default pointSlice.reducer