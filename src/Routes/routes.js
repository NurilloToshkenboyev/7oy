import { Men } from '../pages/men';
import { Women } from '../pages/women';
import { Sale } from '../pages/sale/sale';
import { Childeren } from '../pages/childeren';
import { Collection } from '../pages/collection';
import { NoteFound } from '../pages/note-founded';
import { ProductSingle } from '../pages/product-market'
import { nanoid } from 'nanoid';

export const routes = [
  {
    Component: Men,
    path: '/',
    id: nanoid(),
  },
  {
    Component: Women,
    path: '/women',
    id: nanoid(),
  },
  {
    Component: Sale,
    path: '/sale',
    id: nanoid(),
  },
  {
    Component: Childeren,
    path: '/children',
    id: nanoid(),
  },
  {
    Component: Collection,
    path: '/collection',
    id: nanoid(),
  },
  {
    Component: ProductSingle,
    path: "products/ProductSingle/:id",
    id: nanoid(),
  },
  {
    Component: NoteFound,
    path: '*',
    id: nanoid(),
  }
];