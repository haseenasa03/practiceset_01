let cars = [{ brand: "Maruthi", model: "Swift", price: 70000, color: 'White' },
{ brand: "Maruthi", model: "800", price: 400000, color: 'Black' },
{ brand: "KIA", model: "Seltos", price: 70000, color: 'Red' },
{ brand: "TATA", model: "NEXON", price: 1400000, color: 'White' },
{ brand: "Hyndai", model: "i20", price: 1200000, color: 'Blue' },
{ brand: "BMW", model: "x5", price: 7770000, color: 'Yellow' },
{ brand: "VW", model: "POLO", price: 900000, color: 'Red' },
{ brand: "Mahindra", model: "Scorpio", price: 1900000, color: 'Grey' }]
let new_Cars=cars.filter(function(car)
{
    //return car.color=="White"
    //return car.price>=5000000
    return car.brand=="Mahindra"
    
})
console.log(new_Cars)