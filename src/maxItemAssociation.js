export function maxItemAssociation(arr) {
  let recommendation = [];

  arr.sort().forEach((element) => {
    let isIntersect = arr[0].some((x) => element.includes(x));

    if (isIntersect) {
      recommendation.push(element);
    }
  });

  return [...new Set(recommendation.flat())];
}
