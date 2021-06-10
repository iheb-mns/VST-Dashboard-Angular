import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { TableComponent } from "../../pages/table/table.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";
import { HotelsTableComponent } from "../../pages/hotels-table/hotels-table.component";
import { UsersTableComponent } from "../../pages/users-table/users-table.component";
import { ReservationsTableComponent } from "../../pages/reservations-table/reservations-table.component";
import { UpdateHotelComponent } from "../../pages/update-hotel/update-hotel.component";



export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "table", component: TableComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "hotels", component: HotelsTableComponent },
  { path: "users", component: UsersTableComponent },
  { path: "reservations", component: ReservationsTableComponent },
  { path: "update-hotel", component: UpdateHotelComponent },

];
