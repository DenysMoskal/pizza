import React from 'react';

type CategoriesProps = { 
  value: number; 
  activeIndex: (index: number) => void ; 
}

const Categories: React.FC<CategoriesProps> = ({ value, activeIndex }) => { 
  // const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    'Всі',
    'Мясні',
    'Вегетаріанські',
    'Гриль',
    'Гострі',
    'Закриті',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => activeIndex(index)}
            className={value === index ? 'active' : ''}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
