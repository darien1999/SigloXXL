import { AdminLayout } from "../layouts";
import {
  HomeAdmin,
  UsersAdmin,
  CategoriesAdmin,
  ProductAdmin,
<<<<<<< HEAD
  TablesAdmin

=======
  TablesAdmin,
>>>>>>> e8e937d549a8352ff804c42be4bfbc0405803091
} from "../pages/Admin";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: HomeAdmin,
    exact: true,
  },

  {
    path: "/admin/users",
    layout: AdminLayout,
    component: UsersAdmin,
    exact: true,
  },

  {
    path: "/admin/categories",
    layout: AdminLayout,
    component: CategoriesAdmin,
    exact: true,
  },
  {
    path: "/admin/products",
    layout: AdminLayout,
    component: ProductAdmin,
    exact: true,
  },
  {
    path: "/admin/tables",
    layout: AdminLayout,
    component: TablesAdmin,
    exact: true,
<<<<<<< HEAD
  }
=======
  },
>>>>>>> e8e937d549a8352ff804c42be4bfbc0405803091
];

export default routesAdmin;
