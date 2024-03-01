import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Freia Chocolate',
    description: 'Norwegian chocolate from the Freia company.',
  },
  {
    id: 'p2',
    price: 5,
    title: 'Vitamin Water',
    description: 'A refreshing drink with vitamins.',
  },
  {
    id: 'p3',
    price: 7,
    title: 'Keyboard Cleaner',
    description: 'A spray to clean your keyboard.',
  },
  {
    id: 'p4',
    price: 8,
    title: 'Cat Book',
    description: 'A book about cats.',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
