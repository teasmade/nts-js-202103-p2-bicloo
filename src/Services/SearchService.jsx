const SearchService = {
  startPoint: null,
  endPoint: null,
  startStation: null,
  endStation: null,
  route: null,
  // choosedStation [position, xp_by_available_bikes, xp_by_available_stands]
  choosedStation: [],
  startXp: null,
  endXp: null,
  validateHold: null,
  validateDeposit: null,

  setStartPoint(coordinates) {
    this.startPoint = coordinates;
  },

  setEndPoint(coordinates) {
    this.endPoint = coordinates;
  },

  setStartStation(coordinates) {
    this.startStation = coordinates;
  },

  setEndStation(coordinates) {
    this.endStation = coordinates;
  },

  // Store temporary informations about selected station
  setChoosedStation(coordinates, availableBikes, availableBikeStands) {
    this.choosedStation.push(
      coordinates,
      this.convertToXp(availableBikes),
      this.convertToXp(availableBikeStands)
    );
  },
  convertToXp(availableChoose) {
    if (availableChoose <= 4) return 10;
    if (availableChoose <= 9) return 15;
    return 20;
  },
  resetChoosedStation() {
    this.choosedStation = [];
  },

  setStartXp(xp) {
    this.startXp = xp;
  },

  setEndXp(xp) {
    this.endXp = xp;
  },

  getCoordinates() {
    const filteredCoordinatesArray = [
      this.startPoint,
      this.startStation,
      this.endStation,
      this.endPoint,
    ].filter((point) => point !== null);
    return filteredCoordinatesArray;
  },

  setValidateHold(coordinates) {
    this.validateHold = coordinates;
  },

  setValidateDeposit(coordinates) {
    this.validateDeposit = coordinates;
  },

  getTotalXp() {
    const distance = this.convertToMetres(
      ...this.validateDeposit,
      ...this.validateHold
    );
    // One hundred meter = 1Xp
    return Math.round(distance / 100) + this.startXp + this.endXp;
  },

  convertToMetres(lat1, lon1, lat2, lon2) {
    const radius = 6371e3; // metres
    const a1 = (lat1 * Math.PI) / 180;
    const a2 = (lat2 * Math.PI) / 180;
    const b1 = ((lat2 - lat1) * Math.PI) / 180;
    const b2 = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(b1 / 2) * Math.sin(b1 / 2) +
      Math.cos(a1) * Math.cos(a2) * Math.sin(b2 / 2) * Math.sin(b2 / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return radius * c; // in metres
  },

  calculateDistanceToStation(position, stationArray) {
    const [lat1, lon1] = position;
    const results = stationArray.map((station) => {
      const [lat2, lon2] = station.fields.position;
      const stationResult = {
        name: station.fields.name,
        address: station.fields.address,
        position: station.fields.position,
        stands: station.fields.available_bike_stands,
        bikes: station.fields.available_bikes,
        distance: this.convertToMetres(lat1, lon1, lat2, lon2),
      };
      return stationResult;
    });
    results.sort((a, b) => a.distance - b.distance);
    return results.slice(0, 5);
  },
};
export default SearchService;
