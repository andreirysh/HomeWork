class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacturing = yearOfManufacturing;
        this.maxSpeed = maxSpeed;
        this.maxFuelVolume = maxFuelVolume;
        this.fuelConsumption = fuelConsumption;
    }

    get brand(){
        return this.#brand;
    }

    set brand(carBrand){
        if(typeof carBrand !== 'string' || carBrand.length < 1 || carBrand.length > 50){
            throw new Error('Некорректный бренд машины!');
        }

        this.#brand = carBrand;
    }

    get model(){
        return this.#model;
    }

    set model(carModel){
        if(typeof carModel !== 'string' || carModel.length < 1 || carModel.length > 50){
            throw new Error('Некорректная модель машины!');
        }

        this.#model = carModel;
    }

    get yearOfManufacturing(){
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(carManufacturingYear){
        const currentYear = new Date().getFullYear();

        if (typeof carManufacturingYear !== 'number' || carManufacturingYear < 1900 || carManufacturingYear > currentYear) {
            throw new Error('Некорректный год сборки машины!');
        }
        
        this.#yearOfManufacturing = carManufacturingYear;
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(carSpeed) {
        if (typeof carSpeed !== 'number' || carSpeed < 100 || carSpeed > 300) {
            throw new Error('Некорректная скорость машины!');
        }

        this.#maxSpeed = carSpeed;
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(carFuelVolume) {
        if (typeof carFuelVolume !== 'number' || carFuelVolume < 5 || carFuelVolume > 20) {
            throw new Error('Некорректное кол-во топлива в баке!');
        }

        this.#maxFuelVolume = carFuelVolume;
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(carFuelConsumption) {
        if (typeof carFuelConsumption !== 'number' || carFuelConsumption <= 0) {
            throw new Error('Некорректное кол-во расхода топлива машины!');
        }
        
        this.#fuelConsumption = carFuelConsumption;
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if (this.#isStarted) {
            throw new Error('Машина уже заведена');
        } else {
            this.#isStarted = true;
        }
    }

    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error('Машина ещё не заведена');
        } else {
            this.#isStarted = false;
        }
    }

    fillUpGasTank(amoutOfGas) {
        if (typeof amoutOfGas !== 'number' || amoutOfGas <= 0) {
            throw new Error('Неверное количество топлива для заправки');
        }

        if (this.#currentFuelVolume + amoutOfGas > this.#maxFuelVolume) {
            throw new Error('Топливный бак переполнен');
        }

        this.#currentFuelVolume += amoutOfGas;
    }

    drive(speed, hours) {
        if (typeof speed !== 'number' || speed <= 0) {
            throw new Error('Неверная скорость');
        }

        if (typeof hours !== 'number' || hours <= 0) {
            throw new Error('Неверное количество часов');
        }

        if(speed > this.#maxSpeed){
            throw new Error('Машина не может ехать так быстро');
        }

        if (!this.#isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        }

        const distance = speed * hours;
        const fuelForRide = (distance / 100) * this.#fuelConsumption; 

        if (fuelForRide > this.#currentFuelVolume) {
            throw new Error('Недостаточно топлива');
        }

        this.#currentFuelVolume -= fuelForRide;
        this.#mileage += distance;
    }
}

module.exports = { Car };
