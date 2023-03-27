describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('Un Arreglo desordenado que termine ordenado',function() {
        expect(bubbleSort([2,4,1,7,8,23,45])).toEqual( [1,2,4,7,8,23,45] );
    });

    it ('Un Arreglo ordenado que debe mantenerse ordenado.',function() {
        expect(bubbleSort([1,2,3,4,5,6,7,8,9,10])).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });

    it ('Un Arreglo a la inversa que termine ordenado.',function() {
        expect(bubbleSort([3,2,1])).toEqual([1,2,3]);
    });

    it ('Cuantos intencambios realizamos.',function() {
        spyOn(window,'swap').and.callThrough();
        window.bubbleSort([5,3,4,2,1]);
        expect(window.swap.calls.count()).toEqual(9);
    })
    
  });