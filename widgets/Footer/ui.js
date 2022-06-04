import { useStore } from 'effector-react/scope';
import { $categories } from '../../entities/category';

export const Footer = (props) => {
  const categoriesData = useStore($categories);
  return (
    <footer>
      this is footer
      <ul>
        {categoriesData?.items?.map((item) => (
          <li key={item.id}>
            <span>{item.pluralName}</span>
          </li>
        ))}
      </ul>
    </footer>
  )
}
