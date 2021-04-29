const SearchService = {
  startPoint: null,
  endPoint: null,
  startStation: null,
  endStation: null,
  route: null,

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

  getCoordinates() {
    const filteredCoordinatesArray = [
      this.startPoint,
      this.startStation,
      this.endStation,
      this.endPoint,
    ].filter((point) => point !== null);
    return filteredCoordinatesArray; // .length >= 2 ? filteredCoordinatesArray : [];
  },

  searchStartStation() {
    // ...
  },

  searchEndStation() {
    // ...
  },

  drawBikePath() {
    // routing machine
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
