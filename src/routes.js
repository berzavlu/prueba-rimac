import { lazy } from 'react'

const routes = [
  {
    path: '/',
    Component: lazy(() => import('./pages/index')),
    exact: true,
  },
  {
    path: '/precio',
    Component: lazy(() => import('./pages/precio')),
    exact: true,
  },
  {
    path: '/pago',
    Component: lazy(() => import('./pages/pago')),
    exact: true,
  },
  {
    path: '/gracias',
    Component: lazy(() => import('./pages/gracias')),
    exact: true,
  },
]

export default routes
