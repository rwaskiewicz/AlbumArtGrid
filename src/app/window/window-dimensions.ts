export class WindowDimensions {
  numberOfColumns: number;
  numberOfRows: number;

  constructor(numberOfColumns = 0, numberOfRows = 0) {
    this.numberOfColumns = numberOfColumns;
    this.numberOfRows = numberOfRows;
  }
}
