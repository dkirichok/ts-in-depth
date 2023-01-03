import { timeout } from '../decorators';

abstract class ReferenceItem {
    #id: number;

    private _publisher: string;

    get publisher(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        // eslint-disable-next-line no-underscore-dangle
        this._publisher = newPublisher;
    }

    static department: string = 'Research Dep.';

    constructor(
        id: number,
        public readonly title: string,
        protected year: number,
    ) {
        console.log('Creating new ReferenceItem');
        this.#id = id;
    }

    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} published in ${this.year}`);
        console.log(ReferenceItem.department);
        console.log(Object.getPrototypeOf(this).constructor.department);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

export { ReferenceItem };