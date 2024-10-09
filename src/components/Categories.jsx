import { useState } from 'react'

export default function Categories() {
  const [indexCategory, setIndexCategory] = useState(0)

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const onChangeCategories = (index) => {
    setIndexCategory(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => onChangeCategories(index)}
              className={indexCategory === index ? 'active' : ''}
            >
              {value}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
