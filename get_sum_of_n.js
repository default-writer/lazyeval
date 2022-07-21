let get_sum_of_n = (N) => {
  var total = 0;
    for(var i = 0; i <= N; i++){
      total += i;
    }
    return total;
};

module.exports = get_sum_of_n;