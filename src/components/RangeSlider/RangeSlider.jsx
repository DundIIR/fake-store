import React, { useState, useEffect, useRef } from 'react'
import './_rangeSlider.scss'

const RangeSlider = ({ min = 0, max = 20, inValue = 0, onChange }) => {
	const [value, setValue] = useState(inValue)
	const rangeInputRef = useRef(null)
	const thumbWidth = 6

	useEffect(() => {
		const rangeInput = rangeInputRef.current
		const rangeBubble = rangeInput.nextElementSibling
		positionBubble(rangeBubble, rangeInput)
	}, [value])

	const positionBubble = (bubbleElement, anchorElement) => {
		const { min, max, value, offsetWidth } = anchorElement
		const total = Number(max) - Number(min)
		const perc = (Number(value) - Number(min)) / total
		const offset = thumbWidth / 2 - thumbWidth * perc

		bubbleElement.style.left = `calc(${perc * 100}% + ${offset}px)`
		bubbleElement.textContent = value
	}

	const handleInput = e => {
		setValue(e.target.value)
		onChange(e.target.value)
	}

	return (
		<label className="custom-range-slider">
			<input type="range" min={min} max={max} value={value} onInput={handleInput} ref={rangeInputRef} />
			<span className="bubble"></span>
		</label>
	)
}

export default RangeSlider
