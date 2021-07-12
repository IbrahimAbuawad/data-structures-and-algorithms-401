'use strict';

const AnimalShelter = require('../animal-shelter');


//Happy Path
describe('Testing functions of Animal Shelter class', () => {
  it('add values to the Animal Shelter when using enqueue', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'kira'});
    shelter.enqueue({dog: 'walnut'});
    shelter.enqueue({cat: 'dragon'});
    shelter.enqueue({dog: 'maple'});
    expect(shelter.db[0]).toEqual({cat: 'kira'});
  });
  it('removes the oldest value from the Animal Shelter with the specified animal type cat', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'kira'});
    shelter.enqueue({dog: 'walnut'});
    shelter.enqueue({cat: 'dragon'});
    shelter.enqueue({dog: 'maple'});
    expect(shelter.dequeue('cat')).toEqual({cat: 'kira'});
  });
  it('removes the oldest value from the Animal Shelter with the specified animal type dog', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'kira'});
    shelter.enqueue({dog: 'walnut'});
    shelter.enqueue({cat: 'dragon'});
    shelter.enqueue({dog: 'maple'});
    expect(shelter.dequeue('dog')).toEqual({dog: 'walnut'});
  });
    it('returns false if wrong pref is specified on dequeue function', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'kira'});
    shelter.enqueue({dog: 'walnut'});
    shelter.enqueue({cat: 'dragon'});
    shelter.enqueue({dog: 'maple'});
    expect(shelter.dequeue('fish')).toBeFalsy();
  });


  it('returns false if no pref is specified on dequeue function', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'kira'});
    shelter.enqueue({dog: 'walnut'});
    shelter.enqueue({cat: 'dragon'});
    shelter.enqueue({dog: 'maple'});
    expect(shelter.dequeue()).toBeFalsy();
  });
});