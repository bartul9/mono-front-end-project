import VehicleService from "../Common/Vehicle-Make-Services/VehicleService";
import VehicleContainerStore from "../Pages/Vehicles/Components/VehicleContainerStore";
import VehicleCardStore from "../Pages/Vehicles/Components/VehicleCardStore";
import CreateVehicleStore from "../Pages/Vehicles/Components/CreateVehicleStore";

import MakeService from "../Common/Vehicle-Make-Services/MakeService";
import MakeStore from "../Pages/Make/MakeStore";
import CreateMakeStore from "../Pages/Make/Components/CreateMakeStore";
import DeleteMakeStore from "../Pages/Make/Components/DeleteMakeStore";

import WarningMessageStore from "../Components/WarningMessageStore";
import SharedFunctionsStore from "../Common/SharedFunctionsStore";
import PaginationStore from "../Components/PaginationStore";

class RootStore {
  constructor() {
    this.makeService = new MakeService(this);
    this.vehicleService = new VehicleService(this);

    this.vehicleContainerStore = new VehicleContainerStore(this);
    this.vehicleCardStore = new VehicleCardStore(this);
    this.createVehicleStore = new CreateVehicleStore(this);

    this.makeStore = new MakeStore(this);
    this.createMakeStore = new CreateMakeStore(this);
    this.deleteMakeStore = new DeleteMakeStore(this);

    this.warningMessageStore = new WarningMessageStore(this);
    this.sharedFunctionsStore = new SharedFunctionsStore(this);
    this.paginationStore = new PaginationStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
