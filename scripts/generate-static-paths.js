const fs = require('fs');
const path = require('path');

// Import your data
const { categories, products } = require('../data/products');

// Generate static paths for categories
const categoryPaths = categories.map(category => ({
  params: { id: category.id }
}));

// Generate static paths for products
const productPaths = products.map(product => ({
  params: { id: product.id.toString() }
}));

// Create the paths files
const categoryPathsContent = `export function generateStaticParams() {
  return ${JSON.stringify(categoryPaths, null, 2)};
}`;

const productPathsContent = `export function generateStaticParams() {
  return ${JSON.stringify(productPaths, null, 2)};
}`;

// Write the files
fs.writeFileSync(
  path.join(__dirname, '../app/category/[id]/generateStaticParams.js'),
  categoryPathsContent
);

fs.writeFileSync(
  path.join(__dirname, '../app/product/[id]/generateStaticParams.js'),
  productPathsContent
);

console.log('Static paths generated successfully!');
