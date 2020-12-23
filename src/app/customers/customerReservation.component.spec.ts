import { CustomerReservation } from "./customerReservatio.component";

/* Conceito AAA */
describe("Room reservation", () => {
  xit("Testing room is reserved or not", () => {
    //Arrange
    let custReserve = new CustomerReservation();

    //Act
    let isReserved = custReserve.reserveRoom();

    //Assert
    expect(isReserved).toBeTruthy();
  });
});
