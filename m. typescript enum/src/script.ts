
enum reApiSuc { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN }

interface resAPI<T> {
    status: number;
    type: reApiSuc;
    test: T;
}


const res1: resAPI<string> = {
    status: 200,
    type: reApiSuc.SUCCESS,
    test: 'good'
}
console.log(res1);


const res2: resAPI<string> = {
    status: 200,
    type: reApiSuc.FORBIDDEN,
    test: 'good'
}
console.log(res2);






