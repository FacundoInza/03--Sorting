function bubbleSort(array) {
    /* tu codigo acá */
    for (let i = 0 ; i < array.length ; i++) { // este for controla la cantindad de pasadas que tiene que hacer para ORdenar por completo el arreglo

        for (let j = 0 ; j < array.length - 1 ; j++) { // y este for controla los indices del arreglo, para comparar par por par
            if (array[j] > array[j+1]) {
                swap(array,j,j+1);
            }
        }
    }
    return array;
  }
  
  function swap(array,i1,i2) {
    /* tu codigo acá */
    let aux = array[i1];
    array[i1] = array[i2] ;
    array[i2] = aux
  }