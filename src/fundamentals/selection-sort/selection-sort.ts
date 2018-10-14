function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    [arr[min_index], arr[i]] = [arr[i], arr[min_index]];
  }

  return arr;
}

export { selectionSort };
