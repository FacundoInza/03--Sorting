describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    // tu código acá
    expect(split([5, 7, 2, 4, 3, 2, 6])).toEqual([
      [5, 7, 2],
      [4, 3, 2, 6],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    // testeá el algoritmo
    expect(merge([2,4,6],[1,3,8])).toEqual([1,2,3,4,6,8]);
  });
});

describe ("mergeSort", function() {
    it ("es capaz de ordenar un arreglo", function() {
      expect(mergeSort([6,2,5,3,1,8,9,10,14,7])).toEqual([1,2,3,5,6,7,8,9,10,14]);  
    })
})