// Find the maximum profit obtained in a day
class StockTrading{

	var stock = [10,5,4,9,20,15,6,25,2];

	function maxProfit(){
		
	if(stock.length<2){
		throw new Error('enter atleast 2 values');
	}
	var minPrice = stock[0];
	var maxProfit = stock[1] - stock[0];

	for( i=1; i<stock.length; i++) {
		var currentPrice = stock[i];
		var potentialProfit = currentPrice - minPrice;
		maxProfit = findMax(maxProfit, potentialProfit);
		minPrice = findMin(minPrice,currentPrice);
	 }
	return maxProfit;
	}

	function findMin(a,b){
		return a<b?a:b;
	}

	function findMax(a,b){
		return a>b?a:b;	
	}	
}

console.log(stock);
console.log(maxProfit());



