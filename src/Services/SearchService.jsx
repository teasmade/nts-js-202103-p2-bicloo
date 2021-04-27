const SearchService = {
  startPoint: null,
  endPoint: null,
  startStation: null,
  endStation: null,
  route: null,

  setStartPoint(coordinates) {
    this.startPoint = coordinates;
    console.log('startPoint', this.startPoint);
  },

  setEndPoint(coordinates) {
    this.endPoint = coordinates;
    console.log('endPoint', this.endPoint);
  },

  setStartStation(coordinates) {
    this.startStation = coordinates;
    console.log('startStation', this.startStation);
  },

  setEndStation(coordinates) {
    this.endStation = coordinates;
    console.log('endStation', this.endStation);
  },

  getCoordinates() {
    return [this.startPoint, this.startStation, this.endStation, this.endPoint];
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
