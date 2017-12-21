/*

XXX    - code number version. From 01 to 99.
XXXX   - category id
XXXX   - contractor id
XXXX   - fabric id
XXXXXX - color (in RGB)
XXXX   - size

*/
class ProductCodeGeneratorV1{

  version(){
    return 1;
  }

  format(number, count){
    const number_string = number + "";
    const additional = Array.from(new Array(count - number_string.length), (x,i) => "0").join("");

    return additional + number_string;
  }

  generate(product){
    return this.format(this.version(), 3) + this.format(product.categoryId, 4) + this.format(product.contractorId, 4) + this.format(product.fabricId, 4) + this.format(product.color, 6) + this.format(product.size, 4);
  }
}

module.exports = ProductCodeGeneratorV1;
