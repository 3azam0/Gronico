import React from "react"
import { useState } from "react"
import "./smallSlider.scss"

const SmallSlider = ({ partners }) => {
  const [index, setIndex] = useState(1)
  const prevIndex = index => {
    return index === 0 ? 2 : index - 1
  }
  const nextIndex = index => {
    return index === partners.length ? 0 : index + 1
  }
  return (
    <>
      <div className="cards-slider">
          <div className="cards-wrapper" style={{
              transform:`translateX(${-1 * index*(100/partners.length) + 20}%)`
          }}>
              {partners.map(partner => <div className="card" ><img src={partner}/> </div>)}
        </div>
      </div>
      <button
          className="gronic-slidernavl"
        onClick={() => {
          setIndex(nextIndex(index))
        }}
      >
          &lt;
      </button>
      <button
          className="gronic-slidernavr"
        onClick={() => {
          setIndex(prevIndex(index))
        }}
      >
          &gt;
      </button>
    </>
  )
}

export default SmallSlider
