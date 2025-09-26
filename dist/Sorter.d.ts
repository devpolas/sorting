interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}
export declare class Sort {
    collection: Sortable;
    constructor(collection: Sortable);
    sort(): void;
}
export {};
//# sourceMappingURL=Sorter.d.ts.map