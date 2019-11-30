/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Edit from "@material-ui/icons/Edit"
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Cadastro from "views/Cadastro/Cadastro.jsx"
// core components/views for RTL layout
import PhoneLinkLock from "@material-ui/icons/PhonelinkLock"
import Fechaduras from "views/Fechaduras/Fechaduras";
import Acessos from "views/Acessos/Acessos"
import Invasoes from "views/Invasoes/Invasoes.jsx"
import Suporte from "views/Suporte/Suporte.jsx"
import Enderecos from "views/Enderecos/Enderecos.jsx"
import Address from "@material-ui/icons/Home"
import Access from "@material-ui/icons/DirectionsWalk"
import Invasion from "@material-ui/icons/Error"
import Support from "@material-ui/icons/ContactSupport"
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/usuario",
    name: "Perfil",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/cadastros",
    name: "Cadastros",
    rtlName: "لوحة القيادة",
    icon: Edit,
    component: Cadastro,
    layout: "/admin"
  },
  {
    path: "/enderecos",
    name: "Enderecos",
    rtlName: "لوحة القيادة",
    icon: Address,
    component: Enderecos,
    layout: "/admin"
  },
  {
    path: "/fechaduras",
    name: "Fechaduras",
    rtlName: "لوحة القيادة",
    icon: PhoneLinkLock,
    component: Fechaduras,
    layout: "/admin"
  },
  {
    path: "/acessos",
    name: "Acessos",
    rtlName: "لوحة القيادة",
    icon: Access,
    component: Acessos,
    layout: "/admin"
  },
  {
    path: "/invasoes",
    name: "Invasões",
    rtlName: "لوحة القيادة",
    icon: Invasion,
    component: Invasoes,
    layout: "/admin"
  },
  {
    path: "/suporte",
    name: "Suporte",
    rtlName: "لوحة القيادة",
    icon: Support,
    component: Suporte,
    layout: "/admin"
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // },
  // {
  //   path: "/file-manager",
  //   name: "File Manager",
  //   rtlName: "",
  //   icon: Folder,
  //   component: FileUploaderPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/api-tester",
  //   name: "API Tester",
  //   rtlName: "",
  //   icon: Save_Alt,
  //   component: APITesterPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/homepage",
  //   name: "Homepage",
  //   rtlName: "",
  //   icon: Save_Alt,
  //   component: Homepage,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
