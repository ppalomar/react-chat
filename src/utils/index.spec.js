import { computeCommands, sortByProperty } from './index';

describe('computeCommands', () => {
    it('should return correctly all the commands', () => {
        expect(computeCommands('/nick Pablo')[0]).toBe('/nick');
        expect(computeCommands('/nickWhatever')[0]).toBe('/nick');
        expect(computeCommands('/think Hello')[0]).toBe('/think');
        expect(computeCommands('/oops')[0]).toBe('/oops');      
    });

    it('dont accept other commands or commands without /', () => {
        expect(computeCommands('/otherCommand Pablo')).toBe(null);
        expect(computeCommands('Hello')).toBe(null);
        expect(computeCommands('nick Pablo')).toBe(null);      
    });

    it('dont accept commands in the middle of a sentence', () => {
        expect(computeCommands('Pablo /nick')).toBe(null); 
        expect(computeCommands('hey /think')).toBe(null); 
        expect(computeCommands('test /oops')).toBe(null); 
    });
 });

 describe('sortByProperty', () => {
    it('should order correctly', () => {
        const input = [ 
            {
                test: 2,
                other: 'Palomar',
            },
            {
                test: 1,
                other: 'Pablo',
            },
            {
                test: 3,
                other: 'Pastor',
            },
        ]
        const property = 'test';
        const expectedResult = [ 
            {
                test: 1,
                other: 'Pablo',
            },
            {
                test: 2,
                other: 'Palomar',
            },
            
            {
                test: 3,
                other: 'Pastor',
            },
        ]

        expect(sortByProperty(property, input)).toEqual(expectedResult);   
    });
 });


  