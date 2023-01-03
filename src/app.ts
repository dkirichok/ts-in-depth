import { ReferenceItem, Ul, RefBook, Shelf} from './classes';
import { Category } from './enum';
import { purge, logSearchResults, getBooksByCategoryPromise, getBooksByCategory, getObjectProperty, printRefBook, bookTitleTransorm, calcTotalPages, checkoutBooks, createCustomer, createCustomerID, getAllBooks, getBookAuthorByIndex, getBookByID, getBookTitlesByCategory, getProperty, getTitles, logBookTitle, logFirstAvailable, printBook, setDefaultConfig, showHello, logCategorySearch } from './functions';
import { Author, Book, Librarian, Logger, TOptions, Magazine } from './interfaces';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';
import { Library } from './classes/library';
import { UniversityLibrarian } from './classes/university-librarian';

showHello('greeting', 'TypeScript');

const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'Anna@example.com',
    numBooksPublished: 20
};

const favoriteLibrarian: Librarian = {
    name: 'Boris',
    department: 'Classical Literature',
    email: 'boris@exame.com',
    assistCustomer: null
};

logFirstAvailable(getAllBooks());

logBookTitle(getBookTitlesByCategory(Category.JavaScript));

console.log(getBookAuthorByIndex(0));

calcTotalPages();

const myID: string = createCustomerID('Ann', 10);
console.log(myID);

let idGenerator: typeof createCustomerID;
idGenerator = (name: string, id: number) => `${id}/${name}`;
idGenerator = createCustomerID;
console.log(idGenerator('Boris', 20));

createCustomer('Ann');
createCustomer('Ann', 30);
createCustomer('Ann', 30, 'Kyiv');

console.log(getBookTitlesByCategory());
console.log(getBookTitlesByCategory(Category.CSS));

logFirstAvailable();

console.log(getBookByID(1));

console.log(checkoutBooks('NoName Customer', ...[1, 2, 3]));
const myBooks = checkoutBooks('Ann', 1, 2, 4);
console.log(myBooks);

console.log(getTitles(1, true));
console.log(getTitles(true));
console.log(getTitles(false));

console.log(bookTitleTransorm('Learn TypeScript'));

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,

    markDamaged(reason: string) {
        console.log(`Damaged: ${reason}`);
    }
};

printBook(myBook);
myBook.markDamaged('missing book cover');

const logDamage: Logger = reason => console.log(`Damaged: ${reason}`);

const offer: any = {
    book: {
        title: 'Essential TypeScript'
    }
};

console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book.getTitle?.());
console.log(offer.book.authors?.[0]);

console.log(getProperty(myBook, 'title'));
console.log(getProperty(myBook, 'markDamaged'));
console.log(getProperty(myBook, 'isbn'));

const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
refBook.printItem();
refBook.printCitation();
printRefBook(refBook);

const favoriteLibrarian2 = new Ul.UniversityLibrarian();
favoriteLibrarian2.name = 'Anna';
printRefBook(favoriteLibrarian2);

const personBook: PersonBook = {
    name: 'Anna',
    author: 'Anna',
    available: false,
    category: Category.Angular,
    email: 'anna@example.com',
    id: 1,
    title: 'unknown'
}

const options: TOptions = {duration: 20};
const options2 = setDefaultConfig(options);
console.log(options);
console.log(options2);
Object.is(options, options2);

const flag = true;

if(flag) {
    const o = await import('./classes');
    const reader = new o.Reader();
    reader.name = 'Anna';
    reader.takeBook(getAllBooks()[0]);
    console.log(reader);
}

let library: Library = new Library();

const library2: Library = {
    id: 2,
    name: 'Anna',
    address: 'street'
}

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'Steve McConnell', available: true, category: Category.Software},
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst().title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf = new Shelf<Magazine>();

magazines.forEach(mag => magazineShelf.add(mag));
console.log(magazineShelf.getFirst().title);

magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points'));

console.log(getObjectProperty(magazines[0], 'title'));
console.log(getObjectProperty<Book, 'author' | 'title'>(inventory[0], 'author'));

const bookRequiredFields: BookRequiredFields = {
    author: 'Anna',
    available: false,
    category: Category.Angular,
    id: 1,
    markDamaged: null,
    title: 'Learn Angular',
    pages: 300
}

const updatedBook: UpdatedBook = {
    id: 1,
    pages: 300
}

let params: Parameters<CreateCustomerFunctionType>;
params = ['Anna', 36, 'Kyiv'];
createCustomer(...params);

const favoriteLibrarian3: Librarian = new Ul.UniversityLibrarian();
favoriteLibrarian3['a'] = 1;

console.log(favoriteLibrarian3);
favoriteLibrarian3.name = 'Anna';
favoriteLibrarian3['printLibrarian']();

const favoriteLibrarian4 = new Ul.UniversityLibrarian();
console.log(favoriteLibrarian4);
favoriteLibrarian4.assistFaculty = null;

const refBook2: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
refBook2.printItem();

const favoriteLibrarian5 = new Ul.UniversityLibrarian();
console.log(favoriteLibrarian5);
favoriteLibrarian5.name = 'Anna';
favoriteLibrarian5.assistCustomer('Boris', 'TypeScript');

const favoriteLibrarian6 = new Ul.UniversityLibrarian();
favoriteLibrarian6.name = 'Anna';
console.log(favoriteLibrarian6.name);
favoriteLibrarian6.assistCustomer('Boris', 'TypeScript');
console.log(favoriteLibrarian6);

const refBook3: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
refBook3.copies = 10;
console.log(refBook3.copies);

console.log('begin');
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);
console.log('end');

console.log('begin');
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => {
        console.log(titles)
        return Promise.resolve(titles.length);
    })
    .then(n => console.log(n))
    .catch(reason => console.log(reason));

getBooksByCategoryPromise(Category.Software)
    .then(titles => console.log(titles))
    .catch(reason => console.log(reason));
console.log('end');

console.log('begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch(err => console.log(err));
console.log('end');