import { Plant } from "./Plant.js";

async function syncModels() {
    await Plant.database.sync();
}

export { syncModels };
