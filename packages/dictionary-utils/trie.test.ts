import Trie from "./trie"

describe("Trie", ()=> {
    test("단어를 발견한다.", ()=> {
        const trie = new Trie()
        trie.insert("Hello")
        expect(trie.search("Hello")).toBe('Hello')
        expect(trie.search("Hell")).toBe(null)
        expect(trie.search("Test")).toBe(null)

    })

    test("iterateSearch.", ()=> {
        const trie = new Trie()
        trie.insert("Hello")
        expect(trie.iterateSearch("H")).toBeTruthy();
        expect(trie.iterateSearch("e")).toBeTruthy();
        expect(trie.iterateSearch("l")).toBeTruthy();
        expect(trie.iterateSearch("z")).toBeFalsy();

        expect(trie.iterateSearch("H")).toBeTruthy();
        expect(trie.iterateSearch("e")).toBeTruthy();
        expect(trie.iterateSearch("l")).toBeTruthy();
        expect(trie.iterateSearch("l")).toBeTruthy();
        expect(trie.iterateSearch("o")).toBeTruthy();
        expect(trie.iterateSearch("o")).toBeFalsy();
    })
})