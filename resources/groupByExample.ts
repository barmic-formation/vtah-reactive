Observable.of({id: 1, name: 'aze1'},
                   {id: 2, name: 'sf2'},
                   {id: 2, name: 'dg2'},
                   {id: 1, name: 'erg1'},
                   {id: 1, name: 'df1'},
                   {id: 2, name: 'sfqfb2'},
                   {id: 3, name: 'qfs3'},
                   {id: 2, name: 'qsgqsfg2'}
    )
    .groupBy(p => p.id)
    .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
    .subscribe(p => console.log(p));

// displays:
// [ { id: 1, name: 'aze1' },
//   { id: 1, name: 'erg1' },
//   { id: 1, name: 'df1' } ]
//
// [ { id: 2, name: 'sf2' },
//   { id: 2, name: 'dg2' },
//   { id: 2, name: 'sfqfb2' },
//   { id: 2, name: 'qsgqsfg2' } ]
//
// [ { id: 3, name: 'qfs3' } ]