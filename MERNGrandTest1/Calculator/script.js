document.getElementById("tipForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var billAmount = parseFloat(document.getElementById("totalBill").value);
    var serviceQuality = parseFloat(document.getElementById("serviceQuality").value);
    var numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
  
    var tipPerPerson = (billAmount * (serviceQuality / 100)) / numberOfPeople;
  
    document.getElementById("result").innerHTML = "Tip per person: $" + tipPerPerson.toFixed(2);
  });
  