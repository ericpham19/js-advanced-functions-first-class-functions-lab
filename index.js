// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(){
    const onlyTwoDrivers = drivers.slice(0,2);
    return onlyTwoDrivers;
}

function returnLastTwoDrivers(){
    const onlyLastTwoDrivers = drivers.slice (2);
    return onlyLastTwoDrivers;
}


  let selectingDrivers= [returnFirstTwoDrivers , returnLastTwoDrivers];
    
   

function createFareMultiplier(fare) {
    return (multiplier) => fare * multiplier;

}

function fareDoubler(fare){
    return createFareMultiplier(fare)(2);
}

function fareTripler(fare) {
    return createFareMultiplier(fare)(3);

}



  function selectDifferentDrivers(drivers, driverFunction=null){
        if (driverFunction !== null) {
            return driverFunction()
        }
    
    }


   
  /*describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
    it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
      expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Sally', 'Bob']);
    });

    it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
      expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Freddy', 'Claudia']);
    });
  });
}); */
