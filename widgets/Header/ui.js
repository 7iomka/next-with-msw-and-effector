import { useStore } from 'effector-react/scope';
import { $categories } from '../../entities/category';

export const Header = (props) => {
  const categoriesData = useStore($categories);
  return (
    <header>
      this is header
      <ul>
        {categoriesData?.items?.map((item) => (
          <li key={item.id}>
            <span>{item.pluralName}</span>
          </li>
        ))}
      </ul>
    </header>
  )
}
