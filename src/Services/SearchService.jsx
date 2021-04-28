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
    return filteredCoordinatesArray.length >= 2 ? filteredCoordinatesArray : [];
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
};
export default SearchService;
